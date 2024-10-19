"use client";

import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { collection, getDocs, query, where } from "firebase/firestore"; // Import Firestore functions
import Cards from "../../../../components/Cards/Cards";
import Table from "../../../../components/Table/Table";
import "./MainDash.css";
import Chatbot from '@/components/Chatbot/Chatbot';
import UserProfile from "@/components/display_profile/profile";
import { db } from "../../../firebase/config"; // Import your Firestore config

import ProfileComponent from "@/components/ProfileComponent/ProfileComponent";

const MainDash = () => {
  const [fullname, setFullname] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [age, setAge] = useState(""); 
  const [areasOfInterest, setAreasOfInterest] = useState(""); 
  const [occupation, setOccupation] = useState(""); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const auth = getAuth(); // Get the Firebase Auth instance

    // Set up a listener for authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email; 
        const userRef = collection(db, "Custom_User_data"); 

        // Query to find the user by email
        const q = query(userRef, where("email", "==", email));
        
        try {
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const data = doc.data(); 
              setFullname(data.fullname); 
              setUsername(data.username); 
              setEmail(data.email); 
              setAge(data.age); 
              setAreasOfInterest(data.areasOfInterest); 
              setOccupation(data.occupation); 
            });
          } else {
            console.log("No user found with this email.");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log("No user is currently logged in.");
      }

      setLoading(false); 
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="MainDash">
      <h1 className="font-bold">Dashboard</h1>
      <Cards />
      {/* <Chatbot /> */}
      {/* <Table /> */}
      {/* <UserProfile 
        fullname={fullname} 
        username={username} 
        email={email} 
        age={age} 
        areasOfInterest={areasOfInterest} 
        occupation={occupation} 
      />  */}

      <ProfileComponent 
       fullname={fullname} 
       username={username} 
       email={email} 
       age={age} 
       areasOfInterest={areasOfInterest} 
       occupation={occupation} 
      />
    </div>
  );
};

export default MainDash;
