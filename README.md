

## Getting Started





First, Install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Dataset

Dataset is in the data/iam folder in form of lines and its reqpective text  file. 

```
./data/iam/
├── train.ln
├── val.ln
├── test.ln
└── lines
      ├──a01-000u-00.png
      ├──a01-000u-00.txt
      ├──a01-000u-01.png
      ├──a01-000u-01.txt
      ...
```

## Model Architecture


<img src="Main Project\public\assets\imgs\model_architecture.png" width="900px" alt="method">

## Model Training

Model training has been done for 10000 iterations for train batch size of 32 and test batch size of 8 due to GPU constraints. 

All the commands for training the models and producing the same results is given in ./run folder.

Output for training :

<img src="Main Project\public\assets\imgs\training.png" width="900px" alt="method">

Output for test :

<img src="Main Project\public\assets\imgs\test.png" width="900px" alt="method">

## Summarization Pipeline
1.	Extract text from different formats (image, PDF, docx, txt).
2.	Preprocess the text (tokenization, stopword removal, lemmatization).
3.	Extract sentence embeddings using SBERT.
4.	Extract keywords using RAKE.
5.	Build a graph of sentences based on cosine similarity.
6.	Rank sentences using TextRank and keyword-based scores.
7.	Select top-ranked sentences to generate a summary.
8.	Post-process the summary (grammar check, formatting).

## Project Snapshots
Homepage Snapshot

<img src="Main Project\public\assets\imgs\home.png" width="900px" alt="method">

InktoInsight Tab Snapshot

<img src="Main Project\public\assets\imgs\inktoinsight.png" width="900px" alt="method">

## Acknowledgement

References from public dataset : [IAM](https://fki.tic.heia-fr.ch/databases/iam-handwriting-database)

We appreciate helps from public code: [HTR-VT](https://github.com/yutingli0606/htr-vt)

Research Paper referred : [HTR-VT]((https://github.com/yutingli0606/htr-vt))