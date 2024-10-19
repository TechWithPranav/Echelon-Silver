import torch
import pickle
import os
import re
import json
import valid
from utils import utils
from utils import option
from data import dataset
from model import HTR_VT
from collections import OrderedDict

# Function to save the values
def save_ralph_values(ralph_values, file_path='ralph_values.pkl'):
    with open(file_path, 'wb') as f:
        pickle.dump(ralph_values, f)
    print(f'Saved ralph values to {file_path}.')

# Function to load the values
def load_ralph_values(file_path='ralph_values.pkl'):
    with open(file_path, 'rb') as f:
        ralph_values = pickle.load(f)
    print(f'Loaded ralph values from {file_path}.')
    return ralph_values


def main():

    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    torch.manual_seed(args.seed)

    args.save_dir = os.path.join(args.out_dir, args.exp_name)
    os.makedirs(args.save_dir, exist_ok=True)
    logger = utils.get_logger(args.save_dir)
    logger.info(json.dumps(vars(args), indent=4, sort_keys=True))

    model = HTR_VT.create_model(nb_cls=args.nb_cls, img_size=args.img_size[::-1])

    pth_path = args.save_dir + '/best_CER.pth'
    logger.info('loading HWR checkpoint from {}'.format(pth_path))

    ckpt = torch.load(pth_path, map_location='cpu')
    model_dict = OrderedDict()
    pattern = re.compile('module.')

    for k, v in ckpt['state_dict_ema'].items():
        if re.search("module", k):
            model_dict[re.sub(pattern, '', k)] = v
        else:
            model_dict[k] = v

    model.load_state_dict(model_dict, strict=True)
    model = model.cuda()

    logger.info('Loading test loader...')
    train_dataset = dataset.myLoadDS(args.train_data_list, args.data_path, args.img_size)
    # save_ralph_values(train_dataset.ralph)
    # test_dataset = dataset.myLoadDS(args.test_data_list, args.data_path, args.img_size, ralph=train_dataset.ralph)
    test_dataset = dataset.myLoadDS('./data/iam/test2.ln', './data/iam/sample/', args.img_size, ralph=train_dataset.ralph)
    test_loader = torch.utils.data.DataLoader(test_dataset,
                                              batch_size=args.val_bs,
                                              shuffle=False,
                                              pin_memory=True,
                                              num_workers=args.num_workers)

    converter = utils.CTCLabelConverter(train_dataset.ralph.values())
    criterion = torch.nn.CTCLoss(reduction='none', zero_infinity=True).to(device)

    model.eval()
    with torch.no_grad():
        val_loss, val_cer, val_wer, preds, labels = valid.validation(model,
                                                                     criterion,
                                                                     test_loader,
                                                                     converter)
    # print(args.test_data_list)
    # print(args.data_path)
    print(preds)
    print(labels)
    
    logger.info(
        f'Test. loss : {val_loss:0.3f} \t CER : {val_cer:0.4f} \t WER : {val_wer:0.4f} ')


if __name__ == '__main__':
    args = option.get_args_parser()
    main()

