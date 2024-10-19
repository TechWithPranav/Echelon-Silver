// // components/ChatbotModal.jsx
// "use client";
// import React, { useState } from "react";
// import { FaComments } from "react-icons/fa";
// import Chatbot from "../Chatbot/Chatbot";

// const ChatbotModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div className=" w-[1200px]">
//       <button
//         className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
//         onClick={toggleModal}
//         aria-label="Chat with us"
//       >
//         <FaComments className="w-6 h-6" />
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <button
//               className="absolute top-2 right-2 text-gray-600"
//               onClick={toggleModal}
//               aria-label="Close chat"
//             >
//               &times;
//             </button>
//             <Chatbot />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatbotModal;





// components/ChatbotModal.jsx
"use client";
import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import Chatbot from "../Chatbot/Chatbot";

const ChatbotModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-[1200px]">
      <button
        className="fixed bottom-6 right-9 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
        onClick={toggleModal}
        aria-label="Chat with us"
      >
        <FaComments className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition-colors"
              onClick={toggleModal}
              aria-label="Close chat"
            >
              &times;
            </button>
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotModal;
