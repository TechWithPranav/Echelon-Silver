
"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';


import modi from "../public/assets/imgs/modi.png";
import logoLeft from "../public/assets/imgs/logo3.png"; // Dummy left logo
import logoRight from "../public/assets/imgs/ministry of law.png"; // Dummy right logo

import UserInformationModal from "@/components/UserInformationModal/UserInformationModal";

import { getAuth, signInWithPopup } from "firebase/auth"; // Firebase Auth functions
import { useRouter } from "next/navigation"; // Next.js router for navigation
import { provider } from "../app/firebase/config.js";

import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress styles


const modi_main = modi.src;



// app/page.js
// import MainDash from './(route)/main/MainDash/MainDash';

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [loading, setLoading] = useState(false); // State to track loading

  const router = useRouter(); // Initialize Next.js router




  //   const handleLogin = async () => {
  //     const auth = getAuth(); // Initialize Firebase Authentication

  //     try {
  //         // Trigger the sign-in process with Google popup
  //         const result = await signInWithPopup(auth, provider);
  //         const user = result.user; // Get the authenticated user details

  //         // Log user email to console
  //         console.log("User signed in:", user.email);

  //         // Redirect to the /main page after successful login
  //         router.push("/main");
  //     } catch (error) {
  //         // Handle errors, e.g., user closed the popup, network issues, etc.
  //         console.error("Error during sign-in: ", error);
  //     }
  // };






  const handleLogin = async () => {
    const auth = getAuth(); // Initialize Firebase Authentication

    try {
      // Start NProgress when login is initiated
      NProgress.start();

      // Trigger the sign-in process with Google popup
      const result = await signInWithPopup(auth, provider);
      const user = result.user; // Get the authenticated user details

      // Log user email to console
      console.log("User signed in:", user.email);

      // Redirect to the /main page after successful login
      router.push("/main");

      // Complete NProgress after routing
      NProgress.done();
    } catch (error) {
      // Handle errors, e.g., user closed the popup, network issues, etc.
      console.error("Error during sign-in: ", error);

      // Complete NProgress in case of error
      NProgress.done();
    }
  };


  return (

    <div>
      <header>
        <div className="mx-auto flex justify-between items-center h-20 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Left Logo */}
          <div className="flex items-center mt-9">
            <Image
              src={logoLeft}
              alt="Left Logo"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Right Logo
          <div className="flex items-center mt-5">
            <Image
              src={logoRight}
              alt="Right Logo"
              width={200}
              height={60}
              className="object-contain"
            />
          </div> */}

          
        </div>
      </header>

      <section className=" flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold sm:text-4xl text-gray-700">
          Welcome to MindScribble
          </h2>
           
          <p className="mt-4 text-gray-500 font-semibold text-lg">


            Transform the way you engage with handwritten notes using MindScribble's advanced OCR technology. Whether you're writing with a stylus or uploading images of your handwritten text, MindScribble seamlessly converts your notes into clear, editable digital text. Best of all, everything works offline, so you can access all features anytime, anywhere, without needing an internet connection.
            <br /><br />
            Enhance your productivity with intelligent content summarization and automatic keyword highlighting. MindScribble not only digitizes your notes but also helps you quickly grasp key points, making your workflow more efficient. Enjoy precise OCR, stylus-friendly writing, and easy reference with highlighted keywords. Start simplifying your note-taking experience with MindScribble—where handwritten meets digital effortlessly.



          </p>

          <div className="mt-8 flex">
            <a

              className="cursor-pointer bg-orange-400 px-12 py-3 text-md font-bold text-white transition hover:bg-gray-400 rounded-full focus:outline-none focus:ring focus:ring-grey-400 mr-4"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started Today
            </a>


            <a
              onClick={handleLogin}
              className="cursor-pointer bg-gray-400 px-12 py-3 text-md font-bold text-white transition hover:bg-orange-400 rounded-full focus:outline-none focus:ring focus:ring-yellow-400"

            >
              Login here
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={modi_main}
            alt="Modi Image"
            width={500}
            height={400}
            className="object-contain rounded-lg"
          />
        </div>
      </section>
      {/* User Information Modal */}
      <UserInformationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal function
      />
    </div>



  );
}
