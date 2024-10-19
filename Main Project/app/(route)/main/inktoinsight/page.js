// app/orders/page.js



// app/orders/page.js

"use client";

import React, { useState } from "react";
import { FaLeaf, FaThermometerHalf, FaTint, FaVial, FaCloudRain, FaMapMarkerAlt, FaCalendarAlt, FaSeedling, FaRulerCombined } from "react-icons/fa";
import { useRouter } from "next/navigation";
import DocumentUpload from "@/components/DocumentUpload/DocumentUpload";

const inktoinsight = () => {


  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      {/* <h1 className='text-5xl text-center mt-12 mb-8'>Ink To Insight </h1> */}
        <DocumentUpload />
    </div>
  );
};


export default inktoinsight;








































// "use client"
// import React, { useState } from "react";
// import {
//   FaLeaf,
//   FaThermometerHalf,
//   FaTint,
//   FaVial,
//   FaCloudRain,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaSeedling,
//   FaRulerCombined,
// } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const KrishiBhavishyaComponent = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     N: "",
//     P: "",
//     K: "",
//     Temperature: "",
//     Humidity: "",
//     pH: "",
//     Rainfall: "",
//     State: "",
//     District: "",
//     CropYear: "",
//     Season: "",
//     Area: "",
//   });

//   const [output, setOutput] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };



// //   const handleSubmit = () => {
// //     e.preventDefault();
// // //     const form = new FormData();
// // //     form.append("n", JSON.stringify(formData.N));
// // //     form.append("p", JSON.stringify(formData.P));
// // //     form.append("k", JSON.stringify(formData.K));
// // //     form.append("ph", JSON.stringify(formData.pH));
// // //     form.append("rainfall", JSON.stringify(formData.Rainfall));
// // //     form.append("state", JSON.stringify("Gujrat")); 
// // //     form.append("city", JSON.stringify("Anjar"));
// // //     fetch("http://127.0.0.1:8000/predictCrop", {
// // //       method: "POST",
// // //       body: form,
// // //     })
// // //       .then((response) => {
// // //         if (!response.ok) {
// // //           throw new Error(`HTTP error! Status: ${response.status}`);
// // //         }
// // //         return response.json();
// // //       })
// // //       .then((data) => {
// // //         alert("Visit info saved successfully:", data.crop_prediction);
// // //         setOutput(data.crop_prediction);
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error during fetch operation:", error);

// // //       });

// //       router.push("./krishibhavishya/result")

// //   };










// // const handleSubmit = async (e) => {
// //   e.preventDefault(); // Prevent form default submission behavior

// //   // Create FormData object to send with the POST request
// //   const form = new FormData();
// //   form.append("n", JSON.stringify(formData.N));
// //   form.append("p", JSON.stringify(formData.P));
// //   form.append("k", JSON.stringify(formData.K));
// //   form.append("ph", JSON.stringify(formData.pH));
// //   form.append("rainfall", JSON.stringify(formData.Rainfall));
// //   // form.append("state", JSON.stringify(formData.State));
// //   // form.append("city", JSON.stringify(formData.District));
// //       form.append("state", JSON.stringify("Gujrat")); 
// //     form.append("city", JSON.stringify("Anjar"));

// //   try {
// //     // Send a POST request to the API
// //     const response = await fetch("http://127.0.0.1:8001/predictCrop", {
// //       method: "POST",
// //       body: form,
// //     });

// //     if (!response.ok) {
// //       throw new Error(`HTTP error! Status: ${response.status}`);
// //     }

// //     // Parse the response to get the crop predictions
// //     const data = await response.json();
// //     const cropPrediction = data.crop_prediction; // This is where you get crops like 'apple', 'tomato', etc.

// //     // Join the predictions into a query parameter format
// //     const queryParams = cropPrediction.map((crop, index) => `crop${index + 1}=${crop}`).join("&");

// //     // Push to the result page with the crop predictions in the URL
// //     router.push(`./krishibhavishya/result?${queryParams}`);
// //   } catch (error) {
// //     console.error("Error during fetch operation:", error);
// //   }
// // };









// // .......................
//   // const handleSubmit = (e) => {
//   //   e.preventDefault(); // Prevent the default form submission
//   //   // Here you can handle your form submission logic (e.g., sending data to the backend)

//   //   // After the submission, route to the result page
//   //   router.push("./krishibhavishya/result");
//   // };










//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form default submission behavior
  
//     // Create FormData object to send with the POST request
//     const form = new FormData();
//     form.append("n", JSON.stringify(formData.N));
//     form.append("p", JSON.stringify(formData.P));
//     form.append("k", JSON.stringify(formData.K));
//     form.append("ph", JSON.stringify(formData.pH));
//     form.append("rainfall", JSON.stringify(formData.Rainfall));
//     form.append("state", JSON.stringify(formData.State));
//     form.append("city", JSON.stringify(formData.District));
  
//     try {
//       // Send a POST request to the API
//       const response = await fetch("http://127.0.0.1:8001/predictCrop", {
//         method: "POST",
//         body: form,
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       // Parse the response to get the crop predictions
//       const data = await response.json();
//       console.log("API Response:", data); // Log the response to see its structure
  
//       const cropPrediction = data.crop_prediction; // Get the crop prediction from the response
  
//       // Check if cropPrediction is an array or a single value
//       if (Array.isArray(cropPrediction)) {
//         // If it's an array, join the predictions into a query parameter format
//         const queryParams = cropPrediction.map((crop, index) => `crop${index + 1}=${crop}`).join("&");
//         // Push to the result page with the crop predictions in the URL
//         router.push(`./krishibhavishya/result?${queryParams}`);
//       } else {
//         // If it's a single value (not an array), handle it accordingly
//         router.push(`./krishibhavishya/result?crop=${cropPrediction}`);
//       }
  
//     } catch (error) {
//       console.error("Error during fetch operation:", error);
//     }
//   };
  




//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
//       <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
//         <div className="text-white p-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold flex items-center text-green-700">
//             <FaLeaf className="mr-2" /> Krishi Bhavishya
//           </h2>
//         </div>
//         <form
//           onSubmit={handleSubmit} // Attach the handleSubmit to the form's onSubmit
//           className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
//         >
//           {Object.entries(formData).map(([key, value]) => (
//             <div key={key} className="flex flex-col">
//               <label
//                 htmlFor={key}
//                 className="mb-1 font-medium text-gray-700 flex items-center"
//               >
//                 {getIcon(key)}
//                 <span className="ml-1">{key}</span>
//               </label>
//               <input
//                 type="number"
//                 id={key}
//                 name={key}
//                 value={value}
//                 onChange={handleInputChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all duration-300"
//                 placeholder={`Enter ${key}`}
//                 required
//               />
//             </div>
//           ))}
//           <div className="col-span-full mt-4">
//             <button
//               type="submit"
//               className="w-full bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {output && (
//           <div className="p-6 bg-green-100 border-t border-green-200 animate-fade-in">
//             <h3 className="text-lg font-semibold mb-2">Output:</h3>
//             <p className="text-gray-800">{output}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const getIcon = (key) => {
//   switch (key) {
//     case "N":
//     case "P":
//     case "K":
//       return <FaSeedling className="mr-1 text-green-600" />;
//     case "Temperature":
//       return <FaThermometerHalf className="mr-1 text-red-500" />;
//     case "Humidity":
//       return <FaTint className="mr-1 text-blue-500" />;
//     case "pH":
//       return <FaVial className="mr-1 text-purple-500" />;
//     case "Rainfall":
//       return <FaCloudRain className="mr-1 text-blue-400" />;
//     case "State":
//     case "District":
//       return <FaMapMarkerAlt className="mr-1 text-gray-600" />;
//     case "CropYear":
//     case "Season":
//       return <FaCalendarAlt className="mr-1 text-orange-500" />;
//     case "Area":
//       return <FaRulerCombined className="mr-1 text-indigo-500" />;
//     default:
//       return null;
//   }
// };

// export default KrishiBhavishyaComponent;
























// "use client";
// import React, { useState } from "react";
// import {
//   FaLeaf,
//   FaThermometerHalf,
//   FaTint,
//   FaVial,
//   FaCloudRain,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaSeedling,
//   FaRulerCombined,
// } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const KrishiBhavishyaComponent = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     N: "",
//     P: "",
//     K: "",
//     Temperature: "",
//     Humidity: "",
//     pH: "",
//     Rainfall: "",
//     State: "",
//     District: "",
//     CropYear: "",
//     Season: "",
//     Area: "",
//   });

//   const [output, setOutput] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form default submission behavior

//     // Create FormData object to send with the POST request
//     const form = new FormData();
//     form.append("n", JSON.stringify(formData.N));
//     form.append("p", JSON.stringify(formData.P));
//     form.append("k", JSON.stringify(formData.K));
//     form.append("ph", JSON.stringify(formData.pH));
//     form.append("rainfall", JSON.stringify(formData.Rainfall));
//     form.append("state", JSON.stringify(formData.State));
//     form.append("city", JSON.stringify(formData.District));

//     try {
//       // Send a POST request to the API
//       const response = await fetch("http://127.0.0.1:8001/predictCrop", {
//         method: "POST",
//         body: form,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       // Parse the response to get the crop predictions
//       const data = await response.json();
//       const cropPrediction = data.crop_prediction; // e.g., crops like 'apple', 'tomato', etc.

//       // Create a query parameter string from the crop prediction data
//       const queryParams = cropPrediction
//         .map((crop, index) => `crop${index + 1}=${crop}`)
//         .join("&");

//       // Redirect to the result page with the crop predictions as URL parameters
//       router.push(`./krishibhavishya/result?${queryParams}`);
//     } catch (error) {
//       console.error("Error during fetch operation:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
//       <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
//         <div className="text-white p-6 flex items-center justify-between">
//           <h2 className="text-2xl font-bold flex items-center text-green-700">
//             <FaLeaf className="mr-2" /> Krishi Bhavishya
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
//           {Object.entries(formData).map(([key, value]) => (
//             <div key={key} className="flex flex-col">
//               <label htmlFor={key} className="mb-1 font-medium text-gray-700 flex items-center">
//                 {getIcon(key)}
//                 <span className="ml-1">{key}</span>
//               </label>
//               <input
//                 type="text"
//                 id={key}
//                 name={key}
//                 value={value}
//                 onChange={handleInputChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all duration-300"
//                 placeholder={`Enter ${key}`}
//                 required
//               />
//             </div>
//           ))}
//           <div className="col-span-full mt-4">
//             <button
//               type="submit"
//               className="w-full bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {output && (
//           <div className="p-6 bg-green-100 border-t border-green-200 animate-fade-in">
//             <h3 className="text-lg font-semibold mb-2">Output:</h3>
//             <p className="text-gray-800">{output}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const getIcon = (key) => {
//   switch (key) {
//     case "N":
//     case "P":
//     case "K":
//       return <FaSeedling className="mr-1 text-green-600" />;
//     case "Temperature":
//       return <FaThermometerHalf className="mr-1 text-red-500" />;
//     case "Humidity":
//       return <FaTint className="mr-1 text-blue-500" />;
//     case "pH":
//       return <FaVial className="mr-1 text-purple-500" />;
//     case "Rainfall":
//       return <FaCloudRain className="mr-1 text-blue-400" />;
//     case "State":
//     case "District":
//       return <FaMapMarkerAlt className="mr-1 text-gray-600" />;
//     case "CropYear":
//     case "Season":
//       return <FaCalendarAlt className="mr-1 text-orange-500" />;
//     case "Area":
//       return <FaRulerCombined className="mr-1 text-indigo-500" />;
//     default:
//       return null;
//   }
// };

// export default KrishiBhavishyaComponent;
