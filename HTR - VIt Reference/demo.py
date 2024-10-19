import torch
from PIL import Image
import numpy as np
from utils import utils
from model import HTR_VT
import pickle
from utils import option
import re
from collections import OrderedDict

# Function to load the values
def load_ralph_values(file_path='ralph_values.pkl'):
    with open(file_path, 'rb') as f:
        ralph_values = pickle.load(f)
    print(f'Loaded ralph values from {file_path}.')
    return ralph_values



def extract_text_from_image(image_path):
    # Load the image
    image = Image.open(image_path).convert('L')
    
    # Resize the image to the expected input size of the model
    image = image.resize((args.img_size[0], args.img_size[1]), Image.LANCZOS)
    
    # Convert the image to a numpy array and preprocess
    image_data = np.array(image)
    image_data = np.expand_dims(image_data, axis=0)  # Add batch dimension
    image_data = np.expand_dims(image_data, axis=0)  # Add channel dimension
    image_data = torch.from_numpy(image_data).float() / 255.0  # Normalize to [0, 1]
    
    # Move the tensor to the appropriate device
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    image_data = image_data.to(device)
    
    model = HTR_VT.create_model()
    pth_path = "output//iam//best_CER.pth"
    model = torch.load(pth_path, map_location='cpu')
    # model_dict = OrderedDict()
    pattern = re.compile('module.')

    # for k, v in ckpt['state_dict_ema'].items():
    #     if re.search("module", k):
    #         model_dict[re.sub(pattern, '', k)] = v
    #     else:
    #         model_dict[k] = v

    # model.load_state_dict(model_dict, strict=True)
    model = model.cuda()
    # Set the model to evaluation mode
    model.eval()
    ralph_values = load_ralph_values()

    with torch.no_grad():
        preds = model(image_data)
        preds = preds.float()
        preds_size = torch.IntTensor([preds.size(1)])  # Size of the predicted sequence
        preds = preds.permute(1, 0, 2).log_softmax(2)

        # Get the predicted indices
        _, preds_index = preds.max(2)
        preds_index = preds_index.transpose(1, 0).contiguous().view(-1)
        
        # Decode the predictions
        converter = utils.CTCLabelConverter(ralph_values)
        preds_str = converter.decode(preds_index.data, preds_size.data)
        
    return preds_str

if __name__ == '__main__':
    args = option.get_args_parser()
    # main()
    
    # Example usage
    image_path = 'dummy.png'  # Replace with your image path
    extracted_text = extract_text_from_image(image_path)
    print(f'Extracted Text: {extracted_text}')
