python train.py --exp-name iam --max-lr 1e-3 --train-bs 32 --val-bs 8 --weight-decay 0.5 --mask-ratio 0.4 --attn-mask-ratio 0.1 --max-span-length 8 --img-size 512 64 --proj 8 --dila-ero-max-kernel 2 --dila-ero-iter 1 --proba 0.5 --alpha 1 --total-iter 10000 IAM

python test.py --exp-name iam --max-lr 1e-3 --train-bs 32 --val-bs 8 --weight-decay 0.5 --mask-ratio 0.4 --attn-mask-ratio 0.1 --max-span-length 8 --img-size 512 64 --proj 8 --dila-ero-max-kernel 2 --dila-ero-iter 1 --proba 0.5 --alpha 1 --total-iter 10000 IAM

python demo.py --exp-name iam --max-lr 1e-3 --train-bs 32 --val-bs 8 --weight-decay 0.5 --mask-ratio 0.4 --attn-mask-ratio 0.1 --max-span-length 8 --img-size 512 64 --proj 8 --dila-ero-max-kernel 2 --dila-ero-iter 1 --proba 0.5 --alpha 1 --total-iter 10000 IAM
