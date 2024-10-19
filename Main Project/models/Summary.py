import spacy
from sentence_transformers import SentenceTransformer
import pytesseract
from PIL import Image
import pdfplumber
import PyPDF2
import docx
import nltk
from nltk.tokenize import sent_tokenize
from sklearn.metrics.pairwise import cosine_similarity
import networkx as nx
from rake_nltk import Rake
import re
import language_tool_python
from collections import Counter
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# nltk.download('punkt')
# nltk.download('stopwords')

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'  # Windows

# Function to extract text from an image
def extract_text_from_image(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text

# Function to extract text from a PDF
def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()
    return text

# Alternative way to extract text from PDF using PyPDF2 (in case pdfplumber fails)
def extract_text_from_pdf_alternative(pdf_path):
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ''
        for page in range(len(reader.pages)):
            text += reader.pages[page].extract_text()
    return text

# Function to extract text from a Word document
def extract_text_from_docx(docx_path):
    doc = docx.Document(docx_path)
    text = '\n'.join([para.text for para in doc.paragraphs])
    return text

# Function to extract text from a text file
def extract_text_from_txt(txt_path):
    with open(txt_path, 'r') as file:
        text = file.read()
    return text

# Main function to extract text based on file type
def extract_text(file_path):
    if file_path.lower().endswith(('.png', '.jpg', '.jpeg')):
        return extract_text_from_image(file_path)
    elif file_path.lower().endswith('.pdf'):
        try:
            return extract_text_from_pdf(file_path)
        except:
            return extract_text_from_pdf_alternative(file_path)
    elif file_path.lower().endswith('.docx'):
        return extract_text_from_docx(file_path)
    elif file_path.lower().endswith('.txt'):
        return extract_text_from_txt(file_path)
    else:
        return "Unsupported file format."

file_path = 'img2.jpg'    
text = extract_text(file_path)
nlp = spacy.load('en_core_web_sm')

def preprocess(text):
    # Apply spaCy NLP pipeline
    doc = nlp(text)
    
    # Tokenization, stopword removal, and lemmatization
    cleaned_text = ' '.join([token.lemma_ for token in doc if not token.is_stop and token.is_alpha])
    
    return cleaned_text

def get_sentence_embeddings(sentences):
    # Load the SBERT model for sentence embeddings
    model = SentenceTransformer('paraphrase-MiniLM-L6-v2')
    
    # Generate sentence embeddings
    sentence_embeddings = model.encode(sentences)
    
    return sentence_embeddings

# embeddings = get_sentence_embeddings(text)

# print("Sentence Embeddings:")
# for i, embedding in enumerate(embeddings):
#     print(f"Sentence {i+1} Embedding Shape: {embedding.shape}")


# Function to get sentence embeddings using SBERT
def get_sentence_embeddings(sentences):
    model = SentenceTransformer('paraphrase-MiniLM-L6-v2')
    sentence_embeddings = model.encode(sentences)
    return sentence_embeddings

# Function to extract keywords using RAKE
def extract_keywords(text, num_keywords=10):
    r = Rake()
    r.extract_keywords_from_text(text)
    return r.get_ranked_phrases()[:num_keywords]  # Get top 'num_keywords' keywords

# Function to check keyword presence in a sentence
def keyword_score(sentence, keywords):
    score = sum([1 for word in keywords if word.lower() in sentence.lower()])
    return score

def summarize_text_with_keywords(text, num_sentences=3, word_limit=None):
    # Step 1: Tokenize the text into sentences
    sentences = sent_tokenize(text)
    
    # Step 2: Extract keywords from the text
    keywords = extract_keywords(text)
    
    # Step 3: Get sentence embeddings using SBERT
    sentence_embeddings = get_sentence_embeddings(sentences)
    
    # Step 4: Compute cosine similarity matrix between sentence embeddings
    similarity_matrix = cosine_similarity(sentence_embeddings, sentence_embeddings)
    
    # Step 5: Build a graph of sentences based on similarity scores
    sentence_graph = nx.from_numpy_array(similarity_matrix)
    
    # Step 6: Apply TextRank algorithm to rank sentences
    scores = nx.pagerank(sentence_graph)
    
    # Step 7: Adjust sentence scores based on keyword presence
    keyword_scores = {i: keyword_score(sentences[i], keywords) for i in range(len(sentences))}
    
    # Combine TextRank score with keyword score to rank sentences
    final_scores = {i: scores[i] + keyword_scores[i] for i in scores}
    
    # Step 8: Rank sentences based on their combined scores
    ranked_sentences = sorted(((final_scores[i], sentence) for i, sentence in enumerate(sentences)), reverse=True)
    
    # Step 9: Select the top-ranked sentences to form the summary
    summarized_sentences = []
    total_words = 0
    
    for i in range(min(num_sentences, len(ranked_sentences))):
        sentence = ranked_sentences[i][1]
        word_count = len(sentence.split())
        
        # Check if adding this sentence exceeds the word limit
        if word_limit is None or (total_words + word_count) <= word_limit:
            summarized_sentences.append(sentence)
            total_words += word_count
        else:
            break  # Stop if we reach the word limit

    # Return the final summary
    return ' '.join(summarized_sentences)

def post_process_summary(summary):
    # Step 1: Remove redundant spaces
    summary = re.sub(r'\s+', ' ', summary).strip()
    
    # Step 2: Ensure proper capitalization
    summary = summary.capitalize()  # Capitalize the first letter of the summary
    
    # Step 3: Optionally correct grammar (using LanguageTool)
    # Initialize the language tool
    tool = language_tool_python.LanguageTool('en-US')
    
    matches = tool.check(summary)
    summary = language_tool_python.utils.correct(summary, matches)
    
    # Step 4: Final formatting (optional)
    # Ensure the summary ends with a period if it doesn't already
    if not summary.endswith('.'):
        summary += '.'
    
    return summary

def keyword_frequency(text):
    # Tokenize the text into words
    words = word_tokenize(text.lower())  # Convert to lowercase for consistency

    # Load NLTK's list of stop words
    stop_words = set(stopwords.words('english'))

    # Filter out stop words and punctuation
    keywords = [word for word in words if word.isalnum() and word not in stop_words]

    # Count the frequency of each keyword
    keyword_count = Counter(keywords)

    return keyword_count

def perform_ner(text):
    # Process the text using spaCy
    doc = nlp(text)
    
    # Extract named entities
    named_entities = [(ent.text, ent.label_) for ent in doc.ents]
    
    return named_entities

# keywords_with_frequency = keyword_frequency(text)
# # Print the keywords and their frequency
# for keyword, frequency in keywords_with_frequency.items():
#     print(f"Keyword: '{keyword}' | Frequency: {frequency}")

# entities = perform_ner(text)
# # Print the named entities
# print("Named Entities and their labels:")
# for entity, label in entities:
#     print(f"Entity: '{entity}' | Label: '{label}'")

# summary = summarize_text_with_keywords(text, num_sentences=2, word_limit=50)
# post_processed_summary = post_process_summary(summary)
# print("Post-Processed Summary:", post_processed_summary)