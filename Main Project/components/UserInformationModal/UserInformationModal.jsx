// // // "use client"; // Make this a client component
// // // import { useState } from "react";
// // // // import { auth, db } from "."; // Adjust the path according to your structure
// // // import { doc, setDoc } from "firebase/firestore"; // Firestore functions
// // // import { useRouter } from "next/router"; // Use Next.js router for navigation

// // // const UserInformationModal = ({ isOpen, onClose }) => {
// // //   const [formData, setFormData] = useState({
// // //     username: "",
// // //     areasOfInterest: "",
// // //     occupation: ""
// // //   });
// // //   const [errors, setErrors] = useState({});
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const router = useRouter(); // Initialize Next.js router

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //     validateField(name, value);
// // //   };

// // //   const validateField = (name, value) => {
// // //     let error = "";
// // //     if (!value.trim()) {
// // //       error = "This field is required";
// // //     }
// // //     setErrors({ ...errors, [name]: error });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const newErrors = {};
// // //     Object.keys(formData).forEach((key) => {
// // //       validateField(key, formData[key]);
// // //       if (!formData[key].trim()) {
// // //         newErrors[key] = "This field is required";
// // //       }
// // //     });

// // //     if (Object.keys(newErrors).length === 0) {
// // //       setIsLoading(true);
// // //       try {
// // //         // Add user data to Firestore
// // //         await setDoc(doc(db, "users", formData.username), formData);
// // //         // Navigate to the main page upon successful submission
// // //         router.push("/main"); // Redirect to main page
// // //       } catch (error) {
// // //         console.error("Error adding document: ", error);
// // //       } finally {
// // //         setIsLoading(false);
// // //         onClose(); // Close modal after submission
// // //       }
// // //     } else {
// // //       setErrors(newErrors);
// // //     }
// // //   };

// // //   if (!isOpen) return null; // Don't render if modal is not open

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // //       <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
// // //         <h2 className="text-2xl font-bold mb-4">User Information</h2>
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
// // //             <input
// // //               type="text"
// // //               name="username"
// // //               value={formData.username}
// // //               onChange={handleChange}
// // //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// // //             />
// // //             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="areasOfInterest" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
// // //             <input
// // //               type="text"
// // //               name="areasOfInterest"
// // //               value={formData.areasOfInterest}
// // //               onChange={handleChange}
// // //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// // //             />
// // //             {errors.areasOfInterest && <p className="text-red-500 text-sm">{errors.areasOfInterest}</p>}
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
// // //             <input
// // //               type="text"
// // //               name="occupation"
// // //               value={formData.occupation}
// // //               onChange={handleChange}
// // //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// // //             />
// // //             {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
// // //           </div>
// // //           <div className="flex justify-end">
// // //             <button
// // //               type="button"
// // //               className="bg-gray-300 px-4 py-2 rounded mr-2"
// // //               onClick={onClose}
// // //             >
// // //               Cancel
// // //             </button>
// // //             <button
// // //               type="submit"
// // //               className="bg-blue-500 text-white px-4 py-2 rounded"
// // //               disabled={isLoading}
// // //             >
// // //               {isLoading ? "Submitting..." : "Submit"}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserInformationModal;

















// // "use client"; // Ensure this is a client component
// // import { useState } from "react";
// // import { doc, setDoc } from "firebase/firestore"; // Firestore functions
// // import { useRouter } from "next/navigation"; // Use Next.js router for navigation

// // const UserInformationModal = ({ isOpen, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullname:"",
// //     username: "",
// //     email:"",
// //     age:"",
// //     areasOfInterest: "",
// //     occupation: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);
// //   const router = useRouter(); // Initialize Next.js router

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     let error = "";
// //     if (!value.trim()) {
// //       error = "This field is required";
// //     }
// //     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
// //   };

// //   const handleSubmit = async (e) => {
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
// //       try {
// //         // Add user data to Firestore
// //         await setDoc(doc(db, "users", formData.username), formData);
// //         // Navigate to the main page upon successful submission
// //         router.push("/main"); // Redirect to main page
// //       } catch (error) {
// //         console.error("Error adding document: ", error);
// //       } finally {
// //         setIsLoading(false);
// //         onClose(); // Close modal after submission
// //       }
// //     } else {
// //       setErrors(newErrors);
// //     }
// //   };

// //   if (!isOpen) return null; // Don't render if modal is not open

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //       <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
// //         <h2 className="text-2xl font-bold mb-4">User Information</h2>
// //         <form onSubmit={handleSubmit}>


// //           <div className="mb-4">
// //             <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">fullname</label>
// //             <input
// //               type="text"
// //               name="fullname"
// //               value={formData.fullname}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
// //           </div>



// //           <div className="mb-4">
// //             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
// //             <input
// //               type="text"
// //               name="username"
// //               value={formData.username}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
// //           </div>



// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">email</label>
// //             <input
// //               type="text"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// //           </div>



// //           <div className="mb-4">
// //             <label htmlFor="age" className="block text-sm font-medium text-gray-700">age</label>
// //             <input
// //               type="text"
// //               name="age"
// //               value={formData.age}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
// //           </div>


// //           <div className="mb-4">
// //             <label htmlFor="areasOfInterest" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
// //             <input
// //               type="text"
// //               name="areasOfInterest"
// //               value={formData.areasOfInterest}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.areasOfInterest && <p className="text-red-500 text-sm">{errors.areasOfInterest}</p>}
// //           </div>




// //           <div className="mb-4">
// //             <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
// //             <input
// //               type="text"
// //               name="occupation"
// //               value={formData.occupation}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
// //           </div>
// //           <div className="flex justify-end">
// //             <button
// //               type="button"
// //               className="bg-gray-300 px-4 py-2 rounded mr-2"
// //               onClick={onClose}
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white px-4 py-2 rounded"
// //               disabled={isLoading}
// //             >
// //               {isLoading ? "Submitting..." : "Login"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserInformationModal;


























// // "use client"; // Ensure this is a client component
// // import { useState,useEffect } from "react";
// // import { doc, setDoc } from "firebase/firestore"; // Firestore functions
// // import { useRouter } from "next/navigation"; // Use Next.js router for navigation
// // import { getAuth, signInWithPopup } from "firebase/auth"; // Import Firebase Auth functions
// // import { db,auth,provider } from "../../app/firebase/config.js"; // Import your Firebase config for the provider

// // const UserInformationModal = ({ isOpen, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullname: "",
// //     username: "",
// //     email: "",
// //     age: "",
// //     areasOfInterest: "",
// //     occupation: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);
// //   const router = useRouter(); // Initialize Next.js router
// // //   const auth = getAuth(); // Initialize Firebase Authentication


// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       // Check if Firebase is initialized
// //       if (!auth) {
// //         const firebaseApp = initializeApp(firebaseConfig); // Initialize Firebase
// //         db = getFirestore(firebaseApp);
// //         auth = getAuth(firebaseApp);
// //       }
// //     }
// //   }, []); // Run only once when component mounts


// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     let error = "";
// //     if (!value.trim()) {
// //       error = "This field is required";
// //     }
// //     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
// //   };

// //   const handleSubmit = async (e) => {
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
// //       try {
// //         // Sign in the user with Google
// //         const result = await signInWithPopup(auth, provider);
// //         const user = result.user;

// //         // Add user data to Firestore
// //         await setDoc(doc(db, "users", formData.username), {
// //           ...formData,
// //           email: user.email, // Use the email from the Google user
// //           uid: user.uid, // Store the user's unique ID
// //         });

// //         // Navigate to the main page upon successful submission
// //         router.push("/main"); // Redirect to main page
// //       } catch (error) {
// //         console.error("Error adding document or signing in: ", error);
// //       } finally {
// //         setIsLoading(false);
// //         onClose(); // Close modal after submission
// //       }
// //     } else {
// //       setErrors(newErrors);
// //     }
// //   };

// //   if (!isOpen) return null; // Don't render if modal is not open

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //       <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
// //         <h2 className="text-2xl font-bold mb-4">User Information</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
// //             <input
// //               type="text"
// //               name="fullname"
// //               value={formData.fullname}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
// //             <input
// //               type="text"
// //               name="username"
// //               value={formData.username}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //                // Disable the email field since it's retrieved from Google
// //             />
// //             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
// //             <input
// //               type="text"
// //               name="age"
// //               value={formData.age}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="areasOfInterest" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
// //             <input
// //               type="text"
// //               name="areasOfInterest"
// //               value={formData.areasOfInterest}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.areasOfInterest && <p className="text-red-500 text-sm">{errors.areasOfInterest}</p>}
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
// //             <input
// //               type="text"
// //               name="occupation"
// //               value={formData.occupation}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //             {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
// //           </div>
// //           <div className="flex justify-end">
// //             <button
// //               type="button"
// //               className="bg-gray-300 px-4 py-2 rounded mr-2"
// //               onClick={onClose}
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white px-4 py-2 rounded"
// //               disabled={isLoading}
// //             >
// //               {isLoading ? "Submitting..." : "Login"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserInformationModal;
































// "use client"; // Ensure this is a client component
// import { useState } from "react";
// import { collection, addDoc,getDocs  } from "firebase/firestore"; // Firestore functions
// import { useRouter } from "next/navigation"; // Use Next.js router for navigation
// import { getAuth, signInWithPopup } from "firebase/auth"; // Import Firebase Auth functions
// import { db, provider } from "../../app/firebase/config.js"; // Import your Firebase config for the provider

// async function addDataToFireStore(fullname, username, email, age, areasOfInterest, occupation) {
//     try {
//         const docRef = await addDoc(collection(db, "Custom_User_data"), {
//             fullname: fullname,
//             username: username,
//             email: email,
//             age: age,
//             areasOfInterest: areasOfInterest,
//             occupation: occupation,
//         });
//         console.log("Document written with ID: ", docRef.id);
//         return true;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         return false;
//     }
// }


// // Check if email exists in Firestore
// async function isEmailAlreadyInUse(email) {
//     const querySnapshot = await getDocs(collection(db, "Custom_User_data"));
//     let emailExists = false;

//     querySnapshot.forEach((doc) => {
//         if (doc.data().email === email) {
//             emailExists = true; // Email already exists
//         }
//     });

//     return emailExists; // Return true if the email is found
// }


// const UserInformationModal = ({ isOpen, onClose }) => {
//     const [fullname, setFullname] = useState("");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState("");
//     const [areasOfInterest, setAreasOfInterest] = useState("");
//     const [occupation, setOccupation] = useState("");

//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const router = useRouter(); // Initialize Next.js router

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         switch (name) {
//             case "fullname":
//                 setFullname(value);
//                 break;
//             case "username":
//                 setUsername(value);
//                 break;
//             case "email":
//                 setEmail(value);
//                 break;
//             case "age":
//                 setAge(value);
//                 break;
//             case "areasOfInterest":
//                 setAreasOfInterest(value);
//                 break;
//             case "occupation":
//                 setOccupation(value);
//                 break;
//             default:
//                 break;
//         }

//         validateField(name, value);
//     };

//     const validateField = (name, value) => {
//         let error = "";
//         if (!value.trim()) {
//             error = "This field is required";
//         }
//         setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newErrors = {};

//         // Collecting all data for validation
//         const formValues = { fullname, username, email, age, areasOfInterest, occupation };

//         Object.keys(formValues).forEach((key) => {
//             validateField(key, formValues[key]);
//             if (!formValues[key].trim()) {
//                 newErrors[key] = "This field is required";
//             }
//         });

//         if (Object.keys(newErrors).length === 0) {
//             setIsLoading(true);
//             try {
//                 const auth = getAuth(); // Initialize Firebase Authentication here
//                 const result = await signInWithPopup(auth, provider);
//                 const user = result.user;

//                 console.log("User signed in:", user.email);
//                 // Check if the email is already in use
//                 const emailInUse = await isEmailAlreadyInUse(user.email);
//                 if (emailInUse) {
//                     alert('This email is already in use. Please log in with a different account.');
//                     setIsLoading(false);
//                     return; // Stop the process if email is already in use
//                 }

//                 // If email is not in use, proceed to add data
//                 await addDataToFireStore(fullname, username, user.email, age, areasOfInterest, occupation);
//                 alert('Data added successfully.');
//                 router.push("/main"); // Redirect to main page
//             } catch (error) {
//                 console.error("Error signing in: ", error);
//             } finally {
//                 setIsLoading(false);
//                 onClose(); // Close modal after submission
//             }
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     if (!isOpen) return null; // Don't render if modal is not open

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
//                 <h2 className="text-2xl font-bold mb-4">User Information</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
//                         <input
//                             type="text"
//                             name="fullname"
//                             value={fullname}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                         />
//                         {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//                         <input
//                             type="text"
//                             name="username"
//                             value={username}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                         />
//                         {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                         // Disable the email field since it's retrieved from Google
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
//                         <input
//                             type="text"
//                             name="age"
//                             value={age}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                         />
//                         {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="areasOfInterest" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
//                         <input
//                             type="text"
//                             name="areasOfInterest"
//                             value={areasOfInterest}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                         />
//                         {errors.areasOfInterest && <p className="text-red-500 text-sm">{errors.areasOfInterest}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
//                         <input
//                             type="text"
//                             name="occupation"
//                             value={occupation}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                         />
//                         {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
//                     </div>
//                     <div className="flex justify-end">
//                         <button
//                             type="button"
//                             className="bg-gray-300 px-4 py-2 rounded mr-2"
//                             onClick={onClose}
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className="bg-blue-500 text-white px-4 py-2 rounded"
//                             disabled={isLoading}
//                         >
//                             {isLoading ? "Submitting..." : "Login"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserInformationModal;

























"use client"; // Ensure this is a client component
import { useState } from "react";
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore"; // Firestore functions
import { useRouter } from "next/navigation"; // Use Next.js router for navigation
import { getAuth, signInWithPopup } from "firebase/auth"; // Import Firebase Auth functions
import { db, provider } from "../../app/firebase/config.js"; // Import your Firebase config for the provider

import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress styles

// Add or update data in Firestore based on whether the document ID exists
async function addOrUpdateDataInFireStore(fullname, username, email, age, areasOfInterest, occupation, docId = null) {
    try {
        if (docId) {
            // If document ID is provided, update the existing document
            const docRef = doc(db, "Custom_User_data", docId);
            await updateDoc(docRef, {
                fullname,
                username,
                email,
                age,
                areasOfInterest,
                occupation,
            });
            console.log("Document updated with ID: ", docId);
        } else {
            // If no document ID, add a new document
            const docRef = await addDoc(collection(db, "Custom_User_data"), {
                fullname,
                username,
                email,
                age,
                areasOfInterest,
                occupation,
            });
            console.log("Document written with ID: ", docRef.id);
        }
        return true;
    } catch (error) {
        console.error("Error adding/updating document: ", error);
        return false;
    }
}

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

// The User Information Modal Component
const UserInformationModal = ({ isOpen, onClose }) => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [areasOfInterest, setAreasOfInterest] = useState("");
    const [occupation, setOccupation] = useState("");

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // Initialize Next.js router

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "fullname":
                setFullname(value);
                break;
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "age":
                setAge(value);
                break;
            case "areasOfInterest":
                setAreasOfInterest(value);
                break;
            case "occupation":
                setOccupation(value);
                break;
            default:
                break;
        }

        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = "";
        if (!value.trim()) {
            error = "This field is required";
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Collecting all data for validation
        const formValues = { fullname, username, email, age, areasOfInterest, occupation };

        Object.keys(formValues).forEach((key) => {
            validateField(key, formValues[key]);
            if (!formValues[key].trim()) {
                newErrors[key] = "This field is required";
            }
        });

        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true);
            try {
                const auth = getAuth(); // Initialize Firebase Authentication here
                const result = await signInWithPopup(auth, provider);
                const user = result.user;

                console.log("User signed in:", user.email);

                // Check if the email is already in use
                    // Start NProgress when login is initiated
    NProgress.start();
                const emailDocId = await getEmailDocId(user.email);

                // If email exists, update; otherwise, add new
                await addOrUpdateDataInFireStore(
                    fullname,
                    username,
                    user.email,
                    age,
                    areasOfInterest,
                    occupation,
                    emailDocId // Pass the document ID if the email exists
                );

                alert(emailDocId ? 'Data updated successfully.' : 'Data added successfully.');
                router.push("/main"); // Redirect to main page
                    // Start NProgress when login is initiated
    NProgress.done();
            } catch (error) {
                console.error("Error signing in: ", error);
            } finally {
                setIsLoading(false);
                onClose(); // Close modal after submission
            }
        } else {
            setErrors(newErrors);
        }
    };

    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">User Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={fullname}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        // Disable the email field since it's retrieved from Google
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="text"
                            name="age"
                            value={age}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="areasOfInterest" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
                        <input
                            type="text"
                            name="areasOfInterest"
                            value={areasOfInterest}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.areasOfInterest && <p className="text-red-500 text-sm">{errors.areasOfInterest}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
                        <input
                            type="text"
                            name="occupation"
                            value={occupation}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserInformationModal;

