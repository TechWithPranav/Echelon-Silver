"use client"

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaBriefcase, FaHeart } from "react-icons/fa";

import img from "../../public/assets/videos/profile_side.gif";

const profile_side_main = img.src;


const ProfileComponent = ({
  age,
  areasOfInterest,
  email,
  fullname,
  occupation,
  username,
}) => {
  const [profile, setProfile] = useState({
    fullName: fullname,
    username: username,
    email: email,
    age: age,
    interests: areasOfInterest,
    occupation: occupation
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "fullName":
        if (!value.trim()) {
          newErrors.fullName = "Full name is required";
        } else {
          delete newErrors.fullName;
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "age":
        if (isNaN(value) || value < 18 || value > 120) {
          newErrors.age = "Age must be between 18 and 120";
        } else {
          delete newErrors.age;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  return (
    // <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden sm:w-[800px] xl: w-[1200px]  mx-auto my-10">
    <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden sm:w-[800px] md:w-[1000px] lg:w-[1200px] mx-auto my-10">


      <div className="w-full md:w-1/2 p-8 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={profile.fullName}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.fullName ? 'border-red-500' : ''}`}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && <p id="fullName-error" className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                className="pl-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className={`pl-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={profile.age}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.age ? 'border-red-500' : ''}`}
              aria-invalid={errors.age ? 'true' : 'false'}
              aria-describedby={errors.age ? 'age-error' : undefined}
            />
            {errors.age && <p id="age-error" className="mt-2 text-sm text-red-600">{errors.age}</p>}
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaHeart className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="interests"
                name="interests"
                value={profile.interests}
                onChange={(e) => setProfile({ ...profile, interests: e.target.value.split(', ') })}
                className="pl-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBriefcase className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={profile.occupation}
                onChange={handleInputChange}
                className="pl-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Offline OCR-Based Handwritten Notes Summarizer</h2>
        <div className="flex justify-center">
        <img
          src={profile_side_main}
          alt="Profile"
          className="w-96 h-96 rounded-lg shadow-lg"
        />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
