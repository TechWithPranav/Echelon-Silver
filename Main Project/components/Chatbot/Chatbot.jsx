// "use client"
// import { useState } from "react";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";

// const Chatbot = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   async function generateAnswer(e) {

//     const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
//     setGeneratingAnswer(true);
//     e.preventDefault();
//     setAnswer("Loading your answer... \n It might take up to 10 seconds");
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`,
//         // url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDJ8PKh8Jx9V08nMsH-Kuq3yaWWhMo8BQ8`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });

//       setAnswer(
//         response.data.candidates[0].content.parts[0].text
//       );
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }

//     setGeneratingAnswer(false);
//   }

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <form
//         onSubmit={generateAnswer}
//         className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
//       >
//         <a
//           href="https://github.com/Vishesh-Pandey/chat-ai"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">
//             Chat AI
//           </h1>
//         </a>
//         <textarea
//           required
//           className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask anything"
//         ></textarea>
//         <button
//           type="submit"
//           className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
//             generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={generatingAnswer}
//         >
//           Generate answer
//         </button>
//       </form>
//       <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
//         <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;












// .........Main ............

"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle, FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { AiOutlineLoading } from "react-icons/ai"; // Import loading icon

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioText, setAudioText] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false); // API call state
  const chatContainerRef = useRef(null);

  const languages = ["English", "Marathi", "Hindi", "German", "Chinese"];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = '3. Amplifier :- Sine intensity of wave decreases with the distance so amplitude also decreases with distance. This is known as Attenuation". To compensate this an amplifier is used to increase the amplitude. # Channel :- channel or transmission medium allows electric signal to propagate till the receiver. Channel represents range of frequency for a particular type of signal. If range of frequency is known as band width. f2-f1 # Receiver :- A receiver receives electric signals and then demodulates the signal to extract electric signal back. Then this signal is again amplified using an amplifier and finally a transducer converts electrical signal into sound signals. # Range :- It is the distance (maximum) from a source upto which signal of sufficient strength is present. [ d = √2hRe ] -> For effective transmission the height of Antenna should be of the order of quarter of wavelength of the signal h ~ λ/4';

    

     // System-level prompt to guide the chatbot
  // const systemPrompt = "This is KrishiMira, a chatbot focused on agriculture-related information for India. It will only provide agriculture data. For non-agriculture queries, it will inform the user accordingly.";
  // const systemPrompt = "Hello! I’m the WriteWise Assistant, here to help you with all your handwritten recognition and summarization needs. Whether you want to upload your notes, generate summaries, or explore keyword insights, I’ve got you covered! How can I assist you today?";
  // const systemPrompt = "I am the WriteWise Assistant, designed to help you with handwritten text recognition and summarization. You can ask me about uploading notes, generating summaries, and exploring keyword insights from your documents. I'm here to assist you in transforming your handwritten notes into digital text efficiently. How can I help you today?";
  // const systemPrompt = "Hi, I’m your WriteWise Assistant, designed to assist with handwritten text recognition, summarization, and keyword extraction. When you want to generate a summary, simply head over to the TextConcise tab, where you can upload documents and extract summaries easily. If you're looking to analyze features from handwritten notes, navigate to the Ink to Insight tab. This will let you extract key insights, such as keyword frequency or topic evolution, from your handwritten data. if user ask something related data extracted then respond using this data"+ {data};


  const systemPrompt = `Hi, I’m your WriteWise Assistant, designed to assist with handwritten text recognition, summarization, and keyword extraction. 
When you want to generate a summary, simply head over to the TextConcise tab, where you can upload documents and extract summaries easily. 
If you're looking to analyze features from handwritten notes, navigate to the Ink to Insight tab. This will let you extract key insights, such as keyword frequency or topic evolution, from your handwritten data. 
If you have any questions regarding the extracted data, feel free to ask! I can provide information about keywords or any other insights derived from the data: ${data}.`;


    if (userInput.trim() !== "") {
      // Add user's message
      setChatMessages([...chatMessages, { type: "user", content: userInput }]);

      // Start generating bot's response
      setGeneratingAnswer(true);
      try {
        const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`,
          method: "post",
          data: {
            contents: [{ parts: [{ text: systemPrompt+userInput }] }],

          

          },
        });

        // Add bot's response with Markdown support
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: response.data.candidates[0].content.parts[0].text },
        ]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: "Sorry, something went wrong. Please try again!" },
        ]);
      }
      setGeneratingAnswer(false); // Stop loading
      setUserInput(""); // Clear input
    }
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    setAudioText(isPlaying ? "" : "Audio response is playing...");
  };

  return (
    <div className="">
      <h1 className=" mb-2 font-bold">WriteWise: Your Smart Assistant</h1>
   

    <div className=" w-full flex-grow mx-auto p-4 bg-green-50 rounded-lg shadow-lg ">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div
            ref={chatContainerRef}
            className="bg-white  p-4 rounded-lg shadow-inner h-96 overflow-y-auto mb-4"
            aria-live="polite"
          >
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 flex items-start ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`inline-block p-3 rounded-lg max-w-xs break-words ${
                    message.type === "user"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {/* Render bot response using Markdown */}
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </span>
              </div>
            ))}

            {/* Show typing indicator while the bot is generating an answer */}
            {generatingAnswer && (
              <div className="flex justify-start items-center">
                <AiOutlineLoading className="w-6 h-6 animate-spin text-green-500 mr-2" />
                <span className="text-gray-500">Bot is typing...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
              aria-label="Type your message"
              disabled={generatingAnswer} // Disable input while generating an answer
            />
            <button
              type="submit"
              className={`bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Send message"
              disabled={generatingAnswer} // Disable button while generating an answer
            >
              <FaPaperPlane className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="appearance-none bg-white border border-green-300 rounded-lg p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              aria-label="Select language"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <IoLanguage className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 pointer-events-none" />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-inner">
            <button
              onClick={toggleAudio}
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? (
                <FaPauseCircle className="w-6 h-6" />
              ) : (
                <FaPlayCircle className="w-6 h-6" />
              )}
            </button>
            <div
              className="mt-2 text-sm text-gray-600"
              aria-live="polite"
              aria-atomic="true"
            >
              {audioText}
            </div>
          </div>

          <button
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 flex items-center justify-center gap-2"
            aria-label="Start voice input"
          >
            <FaMicrophone className="w-5 h-5" />
            <span>Voice Input</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chatbot;









// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { FaPlayCircle, FaPauseCircle, FaMicrophone, FaPaperPlane } from "react-icons/fa";
// import { IoLanguage } from "react-icons/io5";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import { AiOutlineLoading } from "react-icons/ai"; // Import loading icon

// const Chatbot = () => {
//   const [userInput, setUserInput] = useState("");
//   const [chatMessages, setChatMessages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioText, setAudioText] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false); // API call state
//   const chatContainerRef = useRef(null);

//   const languages = ["English", "Spanish", "French", "German", "Chinese"];

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatMessages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (userInput.trim() !== "") {
//       // Add user's message
//       setChatMessages([...chatMessages, { type: "user", content: userInput }]);

//       // Start generating bot's response
//       setGeneratingAnswer(true);
//       try {
//         const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//         const response = await axios({
//           url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`,
//           method: "post",
//           data: {
//             contents: [{ parts: [{ text: userInput }] }],
//           },
//         });

//         // Add bot's response with Markdown support
//         setChatMessages((prevMessages) => [
//           ...prevMessages,
//           { type: "bot", content: response.data.candidates[0].content.parts[0].text },
//         ]);
//       } catch (error) {
//         console.error("Error fetching response:", error);
//         setChatMessages((prevMessages) => [
//           ...prevMessages,
//           { type: "bot", content: "Sorry, something went wrong. Please try again!" },
//         ]);
//       }
//       setGeneratingAnswer(false); // Stop loading
//       setUserInput(""); // Clear input
//     }
//   };

//   const toggleAudio = () => {
//     setIsPlaying(!isPlaying);
//     setAudioText(isPlaying ? "" : "Audio response is playing...");
//   };

//   return (
//     <div className="w-full p-4 bg-green-50 rounded-lg shadow-lg">
//       <div className="flex flex-col md:flex-row gap-4 w-full">
//         <div className="flex-grow">
//           <div
//             ref={chatContainerRef}
//             className="bg-white p-4 rounded-lg shadow-inner h-96 overflow-y-auto mb-4 w-full"
//             aria-live="polite"
//           >
//             {chatMessages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 flex items-start ${
//                   message.type === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <span
//                   className={`inline-block p-3 rounded-lg max-w-full break-words ${
//                     message.type === "user"
//                       ? "bg-green-500 text-white"
//                       : "bg-gray-200 text-gray-800"
//                   }`}
//                 >
//                   {/* Render bot response using Markdown */}
//                   <ReactMarkdown>{message.content}</ReactMarkdown>
//                 </span>
//               </div>
//             ))}

//             {/* Show typing indicator while the bot is generating an answer */}
//             {generatingAnswer && (
//               <div className="flex justify-start items-center">
//                 <AiOutlineLoading className="w-6 h-6 animate-spin text-green-500 mr-2" />
//                 <span className="text-gray-500">Bot is typing...</span>
//               </div>
//             )}
//           </div>

//           <form onSubmit={handleSubmit} className="flex gap-2 w-full">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               className="flex-grow p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
//               placeholder="Type your message..."
//               aria-label="Type your message"
//               disabled={generatingAnswer} // Disable input while generating an answer
//             />
//             <button
//               type="submit"
//               className={`bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 ${
//                 generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               aria-label="Send message"
//               disabled={generatingAnswer} // Disable button while generating an answer
//             >
//               <FaPaperPlane className="w-5 h-5" />
//             </button>
//           </form>
//         </div>

//         <div className="flex flex-col gap-4 w-full md:w-1/4">
//           <div className="relative">
//             <select
//               value={selectedLanguage}
//               onChange={(e) => setSelectedLanguage(e.target.value)}
//               className="appearance-none bg-white border border-green-300 rounded-lg p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
//               aria-label="Select language"
//             >
//               {languages.map((lang) => (
//                 <option key={lang} value={lang}>
//                   {lang}
//                 </option>
//               ))}
//             </select>
//             <IoLanguage className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 pointer-events-none" />
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-inner w-full">
//             <button
//               onClick={toggleAudio}
//               className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
//               aria-label={isPlaying ? "Pause audio" : "Play audio"}
//             >
//               {isPlaying ? (
//                 <FaPauseCircle className="w-6 h-6" />
//               ) : (
//                 <FaPlayCircle className="w-6 h-6" />
//               )}
//             </button>
//             <div
//               className="mt-2 text-sm text-gray-600"
//               aria-live="polite"
//               aria-atomic="true"
//             >
//               {audioText}
//             </div>
//           </div>

//           <button
//             className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 flex items-center justify-center gap-2 w-full"
//             aria-label="Start voice input"
//           >
//             <FaMicrophone className="w-5 h-5" />
//             <span>Voice Input</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
