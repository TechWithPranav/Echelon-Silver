// "use client";
// import React from "react";
// import "./Cards.css";
// import {cardsData}  from "../../Data/Data";

// import Card from "../Card/Card";

// const Cards = () => {
    
//   return (
//     <div className="Cards">
//         {console.log(cardsData)}
//       {cardsData.map((card, index) => {
//         return (
//           <div className="parentContainer" key={index}>
//             <Card
//               title={card.title}
//               color={card.color}
//               barValue={card.barValue}
//               value={card.value}
//               png={card.png}
//               series={card.series}
//               index = {index}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;



// Cards.jsx
"use client";
import React from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import "./Cards.css";
import { cardsData } from "../../Data/Data";

// Dynamically import the Card component to prevent SSR
const Card = dynamic(() => import("../Card/Card"), {
  ssr: false, // Prevent server-side rendering
});

const Cards = () => {
  return (
    <div className="Cards">
      {/* {console.log(cardsData)} */}
      {cardsData.map((card, index) => {
        return (
          <div className="parentContainer" key={index}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              index={index}
              key={card.key}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

