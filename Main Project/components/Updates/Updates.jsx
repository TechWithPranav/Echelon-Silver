// // "use client";

// // import React from "react";
// // import "./Updates.css";
// // import { UpdatesData } from "../../Data/Data";

// // const Updates = () => {
// //   return (
// //     <div className="Updates">
// //       {UpdatesData.map((update, index) => {
// //         return (
// //           <div className="update" key={index}>
// //             <img src={update.img} alt="profile" />
// //             <div className="noti">
// //               <div style={{ marginBottom: "0.5rem" }}>
// //                 <span>{update.name}</span>
// //                 <span> {update.noti}</span>
// //               </div>
// //               <span>{update.time}</span>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default Updates;



// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import "./Updates.css";

// const Updates = () => {
//   const [newsData, setNewsData] = useState([]);
//   const updatesContainer = useRef(null);

//   // Fetch latest news data
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/everything?q="agriculture market trends" OR "agriculture market" OR "crop prices" OR "market analysis" OR "commodity prices" OR "agricultural economy" OR "crop health" OR "soil health" OR "disease resistance" OR "pest management" OR "yield analysis" OR "plant health" OR "agriculture technology" OR "precision agriculture" OR "smart farming" OR "agritech" OR "sustainable practices" OR "biotechnology" OR "agriculture drone technology" OR "IoT in agriculture" OR "vertical farming"&apiKey=7c2b8053265a4c3a824400ef3b203d28`);

//         const data = await response.json();
//         setNewsData(data.articles); // Set the news articles data
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Auto scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (updatesContainer.current) {
//         updatesContainer.current.scrollTop += 100;
//         if (updatesContainer.current.scrollTop >= updatesContainer.current.scrollHeight) {
//           updatesContainer.current.scrollTop = 0; // Reset scroll to top when reaching the end
//         }
//       }
//     }, 3000); // Scroll every 3 seconds

//     return () => clearInterval(interval);
//   }, [newsData]);

//   return (
//     <div className="Updates" ref={updatesContainer} style={{ overflowY: "auto", maxHeight: "400px" }}>
//       {newsData.map((news, index) => (
//         <div className="update" key={index}>
//           <img src={news.urlToImage || "default_image_url.jpg"} alt="news" />
//           <div className="noti">
//             <div style={{ marginBottom: "0.5rem" }}>
//               <span>{news.title}</span>
//             </div>
//             <span>{new Date(news.publishedAt).toLocaleString()}</span>
//             <div>
//               <a href={news.url} target="_blank" rel="noopener noreferrer">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Updates;








"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Updates = () => {
    const [newsData, setNewsData] = useState([]);
    const updatesContainer = useRef(null);

    // Fetch the latest news data
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                   `https://newsapi.org/v2/everything?q="student" OR "programming" OR "coding" OR "generative AI" OR "machine learning" OR "MBA" OR "software developer" OR "backend developer"&apiKey=7c2b8053265a4c3a824400ef3b203d28`

                    // `https://newsapi.org/v2/everything?q="agriculture market trends" OR "agriculture market" OR "crop prices" OR "market analysis" OR "commodity prices" OR "agricultural economy" OR "crop health" OR "soil health" OR "disease resistance" OR "pest management" OR "yield analysis" OR "plant health" OR "agriculture technology" OR "precision agriculture" OR "smart farming" OR "agritech" OR "sustainable practices" OR "biotechnology" OR "agriculture drone technology" OR "IoT in agriculture" OR "vertical farming"&apiKey=7c2b8053265a4c3a824400ef3b203d28`
                );

                const data = await response.json();
                setNewsData(data.articles); // Set the fetched news articles
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (updatesContainer.current) {
                if (
                    updatesContainer.current.scrollTop + updatesContainer.current.clientHeight >=
                    updatesContainer.current.scrollHeight
                ) {
                    updatesContainer.current.scrollTop = 0;
                } else {
                    updatesContainer.current.scrollTop += 1;
                }
            }
        }, 50); // Scroll every 50ms for smooth auto-scroll

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [newsData]);

    return (
        <div className=" rounded-xl shadow-lg p-6 w-full max-w-3xl  h-[700px]"  style={{
             background: "#FFF5E1"
          }}>
            {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">Agriculture Market Updates</h2> */}
            <div
                ref={updatesContainer}
                className="overflow-hidden"
                style={{ height: "620px" }}
            >
                {newsData.length > 0 ? (
                    newsData.map((news, index) => (
                        <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                            <div className="flex items-center">
                                <img
                                    src={news.urlToImage || "https://via.placeholder.com/150"} // Fallback image
                                    alt={news.title}
                                    className="w-20 h-20 object-cover rounded-lg mr-4"
                                />
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {new Date(news.publishedAt).toLocaleString()}
                                    </p>
                                    <a
                                        href={news.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                    >
                                        Read More
                                        <FaExternalLinkAlt className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading news updates...</p>
                )}
            </div>
        </div>
    );
};

export default Updates;
