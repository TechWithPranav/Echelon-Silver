











// "use client";
// import React, { useState, useCallback, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaUpload, FaTrash } from "react-icons/fa";

// const DocumentUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message

//   const onDrop = useCallback((acceptedFiles) => {
//     const validFiles = acceptedFiles.filter(
//       (file) =>
//         file.type.startsWith("image/") ||
//         file.type === "application/pdf"
//     );

//     if (validFiles.length !== acceptedFiles.length) {
//       setError("Some files were rejected. Please upload only images or PDFs.");
//     } else {
//       setError("");
//     }

//     setFiles((prevFiles) => [...prevFiles, ...validFiles]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".png", ".gif", ".jpeg", ".jpg"],
//       "application/pdf": [".pdf"],
//     },
//     maxSize: 5242880, // 5MB
//   });

//   const removeFile = (index) => {
//     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   const renderPreview = (file) => {
//     if (file.type.startsWith("image/")) {
//       return (
//         <img
//           src={URL.createObjectURL(file)}
//           alt={file.name}
//           className="w-full h-32 object-cover rounded-md"
//         />
//       );
//     } else {
//       return (
//         <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-md">
//           <span className="text-gray-500">PDF Document: {file.name}</span>
//         </div>
//       );
//     }
//   };

//   const handleUpload = () => {
//     if (files.length === 0) {
//       setError("No files to upload.");
//       return;
//     }

//     console.log("Uploaded Files:");
//     files.forEach(file => console.log(file.name)); // Log each uploaded file name

//     setSuccessMessage("Files are ready to be uploaded!"); // Show success message
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div
//         {...getRootProps()}
//         className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
//           isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-500"
//         }`}
//       >
//         <input {...getInputProps()} />
//         <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
//         <p className="text-lg text-gray-600">
//           Drag & drop files here, or click to select files
//         </p>
//         <p className="text-sm text-gray-500 mt-2">
//           Supported formats: Images, PDFs (Max size: 5MB)
//         </p>
//       </div>

//       {error && (
//         <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
//       )}

//       {successMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">{successMessage}</div>
//       )}

//       {files.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {files.map((file, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white p-3 rounded-lg shadow-md transition-transform hover:scale-105"
//               >
//                 {renderPreview(file)}
//                 <p className="mt-2 text-sm text-gray-600 truncate">{file.name}</p>
//                 <button
//                   onClick={() => removeFile(index)}
//                   className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
//                   aria-label="Remove file"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={handleUpload}
//             className="mt-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
//           >
//             Show Uploaded Files in Console
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentUpload;


























// "use client";
// import React, { useState, useCallback, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaUpload, FaTrash } from "react-icons/fa";

// const DocumentUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message

//   const onDrop = useCallback((acceptedFiles) => {
//     const validFiles = acceptedFiles.filter(
//       (file) =>
//         file.type.startsWith("image/") ||
//         file.type === "application/pdf"
//     );

//     if (validFiles.length !== acceptedFiles.length) {
//       setError("Some files were rejected. Please upload only images or PDFs.");
//     } else {
//       setError("");
//     }

//     setFiles((prevFiles) => [...prevFiles, ...validFiles]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".png", ".gif", ".jpeg", ".jpg"],
//       "application/pdf": [".pdf"],
//     },
//     maxSize: 5242880, // 5MB
//   });

//   const removeFile = (index) => {
//     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   const renderPreview = (file) => {
//     if (file.type.startsWith("image/")) {
//       return (
//         <img
//           src={URL.createObjectURL(file)}
//           alt={file.name}
//           className="w-full h-32 object-cover rounded-md"
//         />
//       );
//     } else {
//       return (
//         <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-md">
//           <span className="text-gray-500">PDF Document: {file.name}</span>
//         </div>
//       );
//     }
//   };

//   const handleUpload = () => {
//     if (files.length === 0) {
//       setError("No files to upload.");
//       return;
//     }

//     console.log("Uploaded Files:");
//     files.forEach(file => console.log(file.name)); // Log each uploaded file name



// // Send POST request to Flask API
// const response = await fetch("http://127.0.0.1:5000/ocr", {
//   method: "POST",
//   body: formData,
// });

// if (!response.ok) {
//   throw new Error(Server error: ${response.statusText});
// }

// // Parse JSON response from the server
// const result = await response.json();

// // Handle the response (you can log it or display the result)
// console.log("Response from server:", result);

//     setSuccessMessage("Files are ready to be uploaded!"); // Show success message
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div
//         {...getRootProps()}
//         className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
//           isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-500"
//         }`}
//       >
//         <input {...getInputProps()} />
//         <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
//         <p className="text-lg text-gray-600">
//           Drag & drop files here, or click to select files
//         </p>
//         <p className="text-sm text-gray-500 mt-2">
//           Supported formats: Images, PDFs (Max size: 5MB)
//         </p>
//       </div>

//       {error && (
//         <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
//       )}

//       {successMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">{successMessage}</div>
//       )}

//       {files.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {files.map((file, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white p-3 rounded-lg shadow-md transition-transform hover:scale-105"
//               >
//                 {renderPreview(file)}
//                 <p className="mt-2 text-sm text-gray-600 truncate">{file.name}</p>
//                 <button
//                   onClick={() => removeFile(index)}
//                   className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
//                   aria-label="Remove file"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={handleUpload}
//             className="mt-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
//           >
//             Show Uploaded Files in Console
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentUpload;




// "use client";
// import React, { useState, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaUpload, FaTrash } from "react-icons/fa";

// const DocumentUpload = () => {
//   const [file, setFile] = useState(null);  // Single file state
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message
// const outputDiv = document.getElementById('output');
// // const outputDiv2 = document.getElementById('output2');
//   let result = '';
//   // let result2 = '';

//   const onDrop = useCallback((acceptedFiles) => {
//     const validFile = acceptedFiles.find(
//       (file) => file.type.startsWith("image/") || file.type === "application/pdf"
//     );

//     if (!validFile) {
//       setError("File was rejected. Please upload only images or PDFs.");
//     } else {
//       setError("");
//       setFile(validFile);  // Only store the first valid file
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".png", ".gif", ".jpeg", ".jpg"],
//       "application/pdf": [".pdf"],
//     },
//     maxSize: 5242880, // 5MB
//     multiple: false,  // Disable multiple files
//   });

//   const removeFile = () => {
//     setFile(null);  // Clear the single file
//   };

//   const renderPreview = (file) => {
//     if (file.type.startsWith("image/")) {
//       console.log('image- '+URL.createObjectURL(file))
//       return (
//         <img
//         src={URL.createObjectURL(file)}
//         alt={file.name}
//         className="w-full h-32 object-cover rounded-md"
//         />
//       );

//     } else {
//       return (
//         <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-md">
//           <span className="text-gray-500">PDF Document: {file.name}</span>
//         </div>
//       );
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError("No file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);  // Append the single file

//     try {
//       setLoading(true);
//       setError(""); // Clear error
//       setSuccessMessage(""); // Clear success message


// console.log(formData);

//       // // Send POST request to Flask API
//       const response = await fetch("http://127.0.0.1:5000/ocr", {
//         method: "POST",
//         body: formData,
//       });

//       // const response2 = await fetch("http://127.0.0.1:5000/summary", {
//       //   method: "POST",
//       //   body: formData,
//       // });

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.statusText}`);
//       }

//       // if (!response2.ok) {
//       //   throw new Error(`Server error: ${response2.statusText}`);
//       // }
//       // Parse JSON response from the server
//       result = await response.json();
//       const extracted_text = result.text || 'No text detected'
//       outputDiv.innerHTML = extracted_text;

//       // result2 = await response2.json();
//       // const summary_text = result2.text || 'No summary'
//       // outputDiv2.innerHTML = summary_text;




      
//       // Handle the response (you can log it or display the result)
//       console.log("Response from server:", result);

//       // Show success message
//       setSuccessMessage("File uploaded successfully!");

//     } catch (error) {
//       console.error("Error during file upload:", error);
//       setError("Failed to upload the file. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div
//         {...getRootProps()}
//         className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
//           isDragActive
//             ? "border-blue-500 bg-blue-50"
//             : "border-gray-300 hover:border-blue-500"
//         }`}
//       >
//         <input {...getInputProps()} />
//         <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
//         <p className="text-lg text-gray-600">
//           Drag & drop a file here, or click to select a file
//         </p>
//         <p className="text-sm text-gray-500 mt-2">
//           Supported formats: Images, PDFs (Max size: 5MB)
//         </p>
//       </div>

//       {error && (
//         <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
//           {error}
//         </div>
//       )}

//       {successMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//           {successMessage}
//         </div>
//       )}

//       {file && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Uploaded Document</h2>
//           <div className="relative bg-white p-3 rounded-lg shadow-md transition-transform hover:scale-105">
//             {renderPreview(file)}
//             <p className="mt-2 text-sm text-gray-600 truncate">{file.name}</p>
//             <button
//               onClick={removeFile}
//               className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
//               aria-label="Remove file"
//             >
//               <FaTrash />
//             </button>
//           </div>
//           <button
//             onClick={handleUpload}
//             className="mt-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {loading ? "Uploading..." : "Upload File"}
//           </button>

// <p id="output" className="mb-4"></p>
// <div>
//   <h1>Summary</h1>
//   <p id="output2"></p>
// </div>

//         </div>
        
//       )}
//     </div>
//   );
// };

// export default DocumentUpload;














"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload, FaTrash } from "react-icons/fa";
import { collection, addDoc, getDocs,getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, signInWithPopup } from "firebase/auth"; // Import Firebase Auth functions
import { db, provider } from "../../app/firebase/config.js"; // Import your Firebase config for the provider

const DocumentUpload = () => {
  const [file, setFile] = useState(null);  // Single file state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [ocrResult, setOcrResult] = useState("");  // State for OCR result
  const [summaryResult, setSummaryResult] = useState("");  // State for Summary result



  const onDrop = useCallback((acceptedFiles) => {
    const validFile = acceptedFiles.find(
      (file) => file.type.startsWith("image/") || file.type === "application/pdf"
    );

    if (!validFile) {
      setError("File was rejected. Please upload only images or PDFs.");
    } else {
      setError("");
      setFile(validFile);  // Only store the first valid file
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      "application/pdf": [".pdf"],
    },
    maxSize: 5242880, // 5MB
    multiple: false,  // Disable multiple files
  });

  const removeFile = () => {
    setFile(null);  // Clear the single file
  };

  const renderPreview = (file) => {
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
          className="w-full h-32 object-cover rounded-md"
        />
      );
    } else {
      return (
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-md">
          <span className="text-gray-500">PDF Document: {file.name}</span>
        </div>
      );
    }
  };
  
   // Function to store or update the OCR result and email in Firestore
  //  const storeOcrResult = async (ocrText) => {
  //   db = firebase.firestore();
  //   const user = firebase.auth().currentUser; // Get the current user

  //   if (user) {
  //     const userEmail = user.email; // Get user's email
  //     const userRef = db.collection("users").doc(user.uid); // Reference to the user's document

  //     // Set or update the user's document
  //     try {
  //       await userRef.set(
  //         {
  //           email: userEmail,
  //           ocrResult: ocrText,
  //           timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Add a timestamp
  //         },
  //         { merge: true } // Use merge to update existing data
  //       );
  //       console.log("OCR result stored successfully");
  //     } catch (error) {
  //       console.error("Error storing OCR result:", error);
  //     }
  //   } else {
  //     console.error("No user is signed in.");
  //   }
  // };

// Check if the email exists in Firestore and return the document ID if found
async function getEmailDocId(email) {
  const querySnapshot = await getDocs(collection(db, "Custom_User_data"));
  let docId = null;

  querySnapshot.forEach((doc) => {
      if (doc.data().email === email) {
          docId = doc.id; // Capture the document ID if the email exists
      }
  });

  return docId; // Return the document ID if found, otherwise null
}

// async function addOrUpdateDataInFireStore(ocrText, docId) {
//   try {
//     const email = "pranavkolhe44@gmail.com";
//     const docRef = doc(db, "Custom_bot_data", docId);

//     // Check if the document exists
//     const docSnapshot = await getDoc(docRef);

//     if (docSnapshot.exists()) {
//       // If document exists, update it
//       await setDoc(docRef, { email, ocrText }, { merge: true });
//       console.log("Document updated with ID: ", docId);
//     } else {
//       // If document does not exist, add a new document
//       await setDoc(docRef, {
//         email,
//         ocrText,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     }

//     return true;
//   } catch (error) {
//     console.error("Error adding/updating document: ", error);
//     return false;
//   }
// }






  // main wala result ..................
  const handleUpload = async () => {
    if (!file) {
      setError("No file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);  // Append the single file

    try {
      setLoading(true);
      setError(""); // Clear error
      setSuccessMessage(""); // Clear success message

      // Send POST request to Flask API for OCR
      const response = await fetch("http://127.0.0.1:5000/ocr", {
        method: "POST",
        body: formData,
      });

      // Send POST request to Flask API for Summary
      const response2 = await fetch("http://127.0.0.1:5000/summary", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      if (!response2.ok) {
        throw new Error(`Server error: ${response2.statusText}`);
      }

      // Parse JSON responses from the server
      const result = await response.json();
      const result2 = await response2.json();

      setOcrResult(result.text || 'No text detected');
      setSummaryResult(result2.text || 'No summary');

      // const emailDocId = await getEmailDocId(user.email);

         // Store the OCR result and user's email in Firestore
      // await addOrUpdateDataInFireStore(result.text,emailDocId);
      // Show success message
      setSuccessMessage("File uploaded successfully!");
      
    } catch (error) {
      console.error("Error during file upload:", error);
      setError("Failed to upload the file. Please try again.");
    } finally {
      setLoading(false);
    }
  };









// // Inside your handleUpload function
// const handleUpload = async () => {
//   if (!file) {
//     setError("No file to upload.");
//     return;
//   }

//   const auth = getAuth(); // Get Firebase Auth instance
//   const user = auth.currentUser; // Get the current authenticated user

//   if (!user) {
//     setError("No user is signed in.");
//     return;
//   }

//   const formData = new FormData();
//   formData.append('file', file); // Append the single file

//   try {
//     setLoading(true);
//     setError(""); // Clear error
//     setSuccessMessage(""); // Clear success message

//     // Send POST request to Flask API for OCR
//     const response = await fetch("http://127.0.0.1:5000/ocr", {
//       method: "POST",
//       body: formData,
//     });

//     // Send POST request to Flask API for Summary
//     const response2 = await fetch("http://127.0.0.1:5000/summary", {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error(`Server error: ${response.statusText}`);
//     }

//     if (!response2.ok) {
//       throw new Error(`Server error: ${response2.statusText}`);
//     }

//     // Parse JSON responses from the server
//     const result = await response.json();
//     const result2 = await response2.json();

//     setOcrResult(result.text || 'No text detected');
//     setSummaryResult(result2.text || 'No summary');

//     const emailDocId = await getEmailDocId(user.email); // Pass the authenticated user's email

//     // Store the OCR result and user's email in Firestore
//     await addOrUpdateDataInFireStore(result.text, emailDocId);

//     // Show success message
//     setSuccessMessage("File uploaded successfully!");
    
//   } catch (error) {
//     console.error("Error during file upload:", error);
//     setError("Failed to upload the file. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };





  // useEffect to update the output when OCR or Summary results change
  useEffect(() => {
    const outputDiv = document.getElementById('output');
    const outputDiv2 = document.getElementById('output2');

    if (outputDiv && ocrResult) {
      outputDiv.innerHTML = ocrResult;
    }

    if (outputDiv2 && summaryResult) {
      outputDiv2.innerHTML = summaryResult;
    }
  }, [ocrResult, summaryResult]);

  return (
  

    <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-500"
        }`}
      >
        <input {...getInputProps()} />
        <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
        <p className="text-lg text-gray-600">
          Drag & drop a file here, or click to select a file
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Supported formats: Images, PDFs (Max size: 5MB)
        </p>
      </div>
  
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
  
      {successMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
  
      {file && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Uploaded Document</h2>
          <div className="relative bg-white p-3 rounded-lg shadow-md transition-transform hover:scale-105">
            {renderPreview(file)}
            <p className="mt-2 text-sm text-gray-600 truncate">{file.name}</p>
            <button
              onClick={removeFile}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
              aria-label="Remove file"
            >
              <FaTrash />
            </button>
          </div>
          <button
            onClick={handleUpload}
            className="mt-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            {loading ? "Uploading..." : "Upload File"}
          </button>
  
          {/* Scrollable content section */}
          <div className="h-60 overflow-y-auto mt-4">
            <h1 className="font-bold">Extracted Data</h1>
            <p id="output" className="mb-10"></p>
  
            <h1 className="font-bold">Summary</h1>
            <p id="output2" className="mb-14"></p>
          </div>
        </div>
      )}
    </div>






  );
};

export default DocumentUpload;
