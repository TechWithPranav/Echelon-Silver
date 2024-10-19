// // app/firebase/config.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; 

// let firebaseApp;
// let db;
// let auth;
// let provider;

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
// // 
// if (typeof window !== "undefined") {
//   // Initialize Firebase only if it hasn't been initialized yet
//   if (!firebaseApp) {
//     firebaseApp = initializeApp(firebaseConfig);
//     db = getFirestore(firebaseApp);
//     auth = getAuth(firebaseApp);
//     provider = new GoogleAuthProvider();
//   }
// }

// export { db, auth, provider }; // Export the initialized services











// app/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
console.log("Firebase Project ID:", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
console.log("Firebase Project ID:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

// Initialize Firebase only once
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider }; // Export initialized services
