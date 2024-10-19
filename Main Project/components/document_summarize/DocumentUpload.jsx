import React, { useState,useEffect } from "react";
import { FiUpload, FiDownload, FiTrash2, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const DocumentUpload = () => {
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [summaryResult, setSummaryResult] = useState("");  // State for Summary result

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    console.log("Uploaded Files: ", files);
    setUploading(true);

    const file = files[0];
    if (!file) {
      setError("No file to upload.");
      setUploading(false);
      return;
    }

    const formData = new FormData();
    // files.forEach(file => formData.append('file', file)); // Append multiple files
    formData.append('file', file);  // Append the single file

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      // Send POST request to Flask API for Summary
      const response = await fetch("http://127.0.0.1:5000/summary2", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      // // Assuming you want to handle the summary response here
      // setSummaryResult(result.text || 'No summary');

      // Assuming you want to handle the summary response here
setTimeout(() => {
  setSummaryResult(result.text || 'No summary');
}, 2000); // Delay of 4000 milliseconds (4 seconds)


      setSuccessMessage("File(s) uploaded successfully!");

      const newDocuments = files.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
        progress: 0,
      }));
      setDocuments([...documents, ...newDocuments]);

      // Simulating upload progress
      const simulateProgress = () => {
        setDocuments((prevDocs) =>
          prevDocs.map((doc) => ({
            ...doc,
            progress: Math.min(doc.progress + 10, 100),
          }))
        );
      };

      const progressInterval = setInterval(simulateProgress, 50);

      setTimeout(() => {
        clearInterval(progressInterval);
        setUploading(false);
      }, 5000);

    } catch (error) {
      console.error("Error during file upload:", error);
      setError("Failed to upload the file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (doc) => {
    const link = document.createElement("a");
    link.href = doc.url;
    link.download = doc.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      setDocuments(documents.filter((doc) => doc.id !== id));
    }
  };

  const handlePreview = (doc) => {
    setPreviewDoc(doc);
  };





  
  // useEffect to update the output when OCR or Summary results change
  useEffect(() => {
    
    const outputDiv2 = document.getElementById('output2');



    if (outputDiv2 && summaryResult) {
      outputDiv2.innerHTML = summaryResult;
    }
  }, [summaryResult]);



  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Document Upload</h2>
      <div className="mb-8">
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
        >
          <span className="flex items-center space-x-2">
            <FiUpload className="w-6 h-6 text-gray-600" />
            <span className="font-medium text-gray-600">
              Drop files to Attach, or
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="hidden"
            multiple
            onChange={handleFileUpload}
            aria-label="File upload"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {documents.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <div
                className="w-full h-32 mb-2 bg-gray-200 rounded-md cursor-pointer"
                onClick={() => handlePreview(doc)}
                role="button"
                tabIndex="0"
                aria-label={`Preview ${doc.name}`}
              >
                {doc.type.startsWith("image/") ? (
                  <img
                    src={doc.url}
                    alt={doc.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {doc.type.split("/")[1].toUpperCase()}
                  </div>
                )}
              </div>
              <p className="text-sm font-medium truncate mb-2">{doc.name}</p>
              {uploading && doc.progress < 100 ? (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${doc.progress}%` }}
                  ></div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleDownload(doc)}
                    className="text-blue-600 hover:text-blue-800"
                    aria-label={`Download ${doc.name}`}
                  >
                    <FiDownload />
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="text-red-600 hover:text-red-800"
                    aria-label={`Delete ${doc.name}`}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {previewDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close preview"
              >
                <FiX />
              </button>
            </div>
            {previewDoc.type.startsWith("image/") ? (
              <img
                src={previewDoc.url}
                alt={previewDoc.name}
                className="max-w-full max-h-[70vh] object-contain"
              />
            ) : (
              <iframe
                src={previewDoc.url}
                title={previewDoc.name}
                className="w-full h-[70vh]"
              ></iframe>
            )}
          </div>
        </div>
      )}

<h1 className="font-bold mb-9 mt-4">Summary</h1>
      <p id="output2" className="mb-14"></p>
    </div>
  );
};

export default DocumentUpload;
