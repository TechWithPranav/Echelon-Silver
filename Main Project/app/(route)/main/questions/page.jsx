// // "use client"

// // import React, { useState } from "react";
// // import { FaUser, FaEnvelope, FaUserTag, FaUserGraduate, FaBriefcase, FaBookOpen } from "react-icons/fa";
// // import { AiOutlineLoading3Quarters } from "react-icons/ai";

// // const UserInformationInput = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     username: "",
// //     age: "",
// //     occupation: "",
// //     fieldOfInterest: ""
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     let error = "";
// //     switch (name) {
// //       case "email":
// //         if (!/\S+@\S+\.\S+/.test(value)) {
// //           error = "Invalid email format";
// //         }
// //         break;
// //       case "age":
// //         if (isNaN(value) || value < 0) {
// //           error = "Age must be a positive number";
// //         }
// //         break;
// //       default:
// //         if (!value.trim()) {
// //           error = "This field is required";
// //         }
// //     }
// //     setErrors({ ...errors, [name]: error });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const newErrors = {};
// //     Object.keys(formData).forEach((key) => {
// //       validateField(key, formData[key]);
// //       if (!formData[key].trim()) {
// //         newErrors[key] = "This field is required";
// //       }
// //     });

// //     if (Object.keys(newErrors).length === 0) {
// //       setIsLoading(true);
// //       // Simulating API call
// //       setTimeout(() => {
// //         setIsLoading(false);
// //         // Redirect to main page
// //         alert("Logged in successfully!");
// //       }, 2000);
// //     } else {
// //       setErrors(newErrors);
// //     }
// //   };

// //   const suggestUsername = () => {
// //     const suggestions = [
// //       `${formData.fullName.toLowerCase().replace(/ /g, "_")}_${Math.floor(Math.random() * 100)}`,
// //       `${formData.fullName.toLowerCase().split(" ")[0]}${new Date().getFullYear()}`,
// //       `${formData.occupation.toLowerCase()}_enthusiast_${Math.floor(Math.random() * 1000)}`
// //     ];
// //     return suggestions[Math.floor(Math.random() * suggestions.length)];
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-4">
// //       <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-2xl">
// //         <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">User Information</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="relative">
// //             <FaUser className="absolute top-3 left-3 text-pink-500" />
// //             <input
// //               type="text"
// //               name="fullName"
// //               value={formData.fullName}
// //               onChange={handleChange}
// //               placeholder="Full Name"
// //               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
// //               aria-label="Full Name"
// //             />
// //             {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// //           </div>

// //           <div className="relative">
// //             <FaEnvelope className="absolute top-3 left-3 text-pink-500" />
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Email"
// //               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
// //               aria-label="Email"
// //             />
// //             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //           </div>

// //           <div className="relative">
// //             <FaUserTag className="absolute top-3 left-3 text-pink-500" />
// //             <input
// //               type="text"
// //               name="username"
// //               value={formData.username}
// //               onChange={handleChange}
// //               placeholder="Username"
// //               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
// //               aria-label="Username"
// //             />
// //             <button
// //               type="button"
// //               onClick={() => setFormData({ ...formData, username: suggestUsername() })}
// //               className="absolute right-2 top-2 text-pink-500 hover:text-pink-700 transition-colors duration-300"
// //             >
// //               Suggest
// //             </button>
// //             {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
// //           </div>

// //           <div className="relative">
// //             <FaUserGraduate className="absolute top-3 left-3 text-pink-500" />
// //             <input
// //               type="number"
// //               name="age"
// //               value={formData.age}
// //               onChange={handleChange}
// //               placeholder="Age"
// //               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
// //               aria-label="Age"
// //             />
// //             {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
// //           </div>

// //           <div className="relative">
// //             <FaBriefcase className="absolute top-3 left-3 text-pink-500" />
// //             <input
// //               type="text"
// //               name="occupation"
// //               value={formData.occupation}
// //               onChange={handleChange}
// //               placeholder="Occupation"
// //               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
// //               aria-label="Occupation"
// //             />
// //             {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
// //           </div>

// //           <div className="relative">
// //             <FaBookOpen className="absolute top-3 left-3 text-pink-500" />
// //             <input
// //               type="text"
// //               name="fieldOfInterest"
// //               value={formData.fieldOfInterest}
// //               onChange={handleChange}
// //               placeholder="Field of Interest/Study"
// //               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
// //               aria-label="Field of Interest/Study"
// //             />
// //             {errors.fieldOfInterest && <p className="text-red-500 text-sm mt-1">{errors.fieldOfInterest}</p>}
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center"
// //             disabled={isLoading}
// //           >
// //             {isLoading ? (
// //               <>
// //                 <AiOutlineLoading3Quarters className="animate-spin mr-2" />
// //                 Logging in...
// //               </>
// //             ) : (
// //               "Login"
// //             )}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserInformationInput;

















// "use client"
// import React, { useState } from "react";
// import { FaUser, FaEnvelope, FaUserTag, FaUserGraduate, FaBriefcase, FaBookOpen } from "react-icons/fa";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { auth, db } from "../../../firebase/config"; // Import your Firebase config
// // import { doc, setDoc } from "firebase/firestore"; // For Firestore
// // import { useNavigate } from "react-router-dom"; // For redirection
// import { useRouter } from 'next/router'; // Import Next.js router

// const UserInformationInput = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     username: "",
//     age: "",
//     occupation: "",
//     fieldOfInterest: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   // const navigate = useNavigate();
//   const router = useRouter(); // Initialize Next.js router

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "email":
//         if (!/\S+@\S+\.\S+/.test(value)) {
//           error = "Invalid email format";
//         }
//         break;
//       case "age":
//         if (isNaN(value) || value < 0) {
//           error = "Age must be a positive number";
//         }
//         break;
//       default:
//         if (!value.trim()) {
//           error = "This field is required";
//         }
//     }
//     setErrors({ ...errors, [name]: error });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       validateField(key, formData[key]);
//       if (!formData[key].trim()) {
//         newErrors[key] = "This field is required";
//       }
//     });

//     if (Object.keys(newErrors).length === 0) {
//       setIsLoading(true);

//       try {
//         // Create a user document in Firestore
//         await setDoc(doc(db, "users", formData.email), {
//           fullName: formData.fullName,
//           email: formData.email,
//           username: formData.username,
//           age: formData.age,
//           occupation: formData.occupation,
//           fieldOfInterest: formData.fieldOfInterest
//         });

//         // Simulate login
//         // You can use Firebase Authentication here if needed (this is just simulating successful submission)
//         await auth.signInWithEmailAndPassword(formData.email, "yourpassword");

//         // Simulate loading
//         setTimeout(() => {
//           setIsLoading(false);
//           alert("Logged in successfully!");
//           // navigate("/main"); // Redirect to main page after login
//           router.push("/main"); // Use Next.js's router.push for navigation
//         }, 2000);
//       } catch (error) {
//         console.error("Error adding document: ", error);
//         setIsLoading(false);
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   const suggestUsername = () => {
//     const suggestions = [
//       `${formData.fullName.toLowerCase().replace(/ /g, "_")}_${Math.floor(Math.random() * 100)}`,
//       `${formData.fullName.toLowerCase().split(" ")[0]}${new Date().getFullYear()}`,
//       `${formData.occupation.toLowerCase()}_enthusiast_${Math.floor(Math.random() * 1000)}`
//     ];
//     return suggestions[Math.floor(Math.random() * suggestions.length)];
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-4">
//       <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">User Information</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="relative">
//             <FaUser className="absolute top-3 left-3 text-pink-500" />
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
//               aria-label="Full Name"
//             />
//             {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//           </div>

//           <div className="relative">
//             <FaEnvelope className="absolute top-3 left-3 text-pink-500" />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
//               aria-label="Email"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div className="relative">
//             <FaUserTag className="absolute top-3 left-3 text-pink-500" />
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Username"
//               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
//               aria-label="Username"
//             />
//             <button
//               type="button"
//               onClick={() => setFormData({ ...formData, username: suggestUsername() })}
//               className="absolute right-2 top-2 text-pink-500 hover:text-pink-700 transition-colors duration-300"
//             >
//               Suggest
//             </button>
//             {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//           </div>

//           <div className="relative">
//             <FaUserGraduate className="absolute top-3 left-3 text-pink-500" />
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               placeholder="Age"
//               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
//               aria-label="Age"
//             />
//             {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
//           </div>

//           <div className="relative">
//             <FaBriefcase className="absolute top-3 left-3 text-pink-500" />
//             <input
//               type="text"
//               name="occupation"
//               value={formData.occupation}
//               onChange={handleChange}
//               placeholder="Occupation"
//               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
//               aria-label="Occupation"
//             />
//             {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
//           </div>

//           <div className="relative">
//             <FaBookOpen className="absolute top-3 left-3 text-pink-500" />
//             <input
//               type="text"
//               name="fieldOfInterest"
//               value={formData.fieldOfInterest}
//               onChange={handleChange}
//               placeholder="Field of Interest/Study"
//               className="w-full pl-10 pr-3 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
//               aria-label="Field of Interest/Study"
//             />
//             {errors.fieldOfInterest && <p className="text-red-500 text-sm mt-1">{errors.fieldOfInterest}</p>}
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-3 bg-pink-600 text-white rounded-md font-bold hover:bg-pink-700 transition-colors duration-300 disabled:opacity-50"
//           >
//             {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserInformationInput;
