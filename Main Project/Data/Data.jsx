// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilHeartRate,
    UilBed,
    // UisAlignCenter,
  } from "@iconscout/react-unicons";


  import { IoHomeOutline } from "react-icons/io5";
  import { HeartPulse } from 'lucide-react';
  import { SiSimpleanalytics } from "react-icons/si";
  import { MdOutlineHealthAndSafety } from "react-icons/md";
  import { MdManageHistory } from "react-icons/md";
  import { TbHeartRateMonitor } from "react-icons/tb";
  import { FaBedPulse } from "react-icons/fa6";

  import { PiPlant } from "react-icons/pi";
  import { IoAnalytics } from "react-icons/io5";








  // Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../public/assets/imgs/img1.png";
import img2 from "../public/assets/imgs/img2.png";
import img3 from "../public/assets/imgs/img3.png";



const img1use = img1.src;
const img2use = img2.src;
const img3use = img3.src;

  // Sidebar Data
export const SidebarData = [
    {
      icon: IoHomeOutline,
      heading: "Home",
      title:"Home",
    },
    {
      icon: SiSimpleanalytics,
      // icon: IoHomeOutline,
      heading: "inktoinsight",
      title:"InkToInsight",
    },
    {
      icon: MdOutlineHealthAndSafety,
      heading: "textconcise",
      title:"TextConcise",
    },
    {
      icon: MdManageHistory,
      heading: 'stylusscribe',
      title:"StylusScribe",
    },
    // {
    //   icon: UilChart,
    //   heading: 'Analytics'
    // },
  ];



//   // Analytics Cards Data

// export const cardsData = [
//   {
//     title: "Market",
//     key:1,
//     color: {
//       backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//       boxShadow: "0px 10px 20px 0px #e0c6f5",
//     },
//     barValue: 90,
//     value: "Blood Pressure: 120/80 mmHg",
//     png:   HeartPulse, // Assuming you have a heart rate icon
//     series: [
//       {
//         name: "Vital Signs",
//         data: [120, 118, 115, 121, 119, 117, 120], // Example data for systolic BP readings
//       },
//     ],
//   },
//   {
//     title: "Metabolic Health",
//     key:2,
//     color: {
//       backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//       boxShadow: "0px 10px 20px 0px #FDC0C7",
//     },
//     barValue: 70,
//     value: "Cholesterol: 190 mg/dL",
//     png: TbHeartRateMonitor, // Assuming a medical icon
//     series: [
//       {
//         name: "Cholesterol",
//         data: [190, 195, 185, 180, 195, 200, 190], // Example cholesterol level data
//       },
//     ],
//   },

//   {
//     title: "Sleep Quality",
//     color: {
//       backGround:
//         "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
//       boxShadow: "0px 10px 20px 0px #F9D59B",
//     },
//     key:3,
//     barValue: 75,
//     value: "Sleep: 7.5 Hours",
//     png: FaBedPulse, // Assuming a bed or sleep icon
//     series: [
//       {
//         name: "Sleep Patterns",
//         data: [7, 6.5, 8, 7.5, 6, 7, 7.5], // Example sleep hours over a week
//       },
//     ],
//   },




// ];



export const cardsData = [
  {
    title: "Keyword Frequency Heatmap",
    key: 1,
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
    value: "Visualizing Keyword Usage",
    // png: CropIcon, // Assuming you have a crop-related icon
    png:   PiPlant, // Assuming you have a heart rate icon
    series: [
      {
                      name: "Agriculture",
                      data: [4, 4,2 , 4, 1, 6, 9], // Example data from API
                    },
                    {
                      name: "Computer Network",
                      data: [7, 2,6 , 2, 1,4, 9], // Example data from API
                    },
                    {
                      name: "Convulational Neural Network",
                      data: [2, 2,5 , 4, 8, 2, 2], // Example data from API
                    },
                    {
                      name: "Generative AI",
                      data: [7, 2,6 , 2, 1,4, 9], // Example data from API
                    },
                    {
                      name: "Metallurgy",
                      data: [4, 4,2 , 4, 1, 6, 9], // Example data from API
                    }
      // {
      //   name: "Cotton",
      //   data: [3000, 4200, 4300, 4400, 5300, 4500, 4600], // Example data from API
      // },
    ],
  },
  {
    title: "Scanned Documents Per Day",
    key: 2,
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 70,
    value: "Documents Processed",
    // png: NPKIcon, // Assuming a farm/soil icon
    png:   HeartPulse, // Assuming you have a heart rate icon
    series: [
      {
        name: "Documents",
        data: [5, 7, 3, 9, 3, 15, 10],
      },
    ],
  },
  {
    title: "Study Time vs Productivity",
    key: 3,
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 75,
    value: "Tracking Efficiency Over Time",
    // png: InvestmentIcon, // Assuming an investment/profit icon
    png:   IoAnalytics, // Assuming you have a heart rate icon
    series: [
      {
        name: "Study Time (hours)",
      data: [2, 4, 6, 5, 7, 8, 9], // Investment in thousands
      },
      {
        name: "Productivity (output)",
        data: [60, 70, 80, 75, 85, 90, 95],  // Profit in thousands
      },
    ],
  },
];




// export const cardsData = [
//   {
//     title: "Keyword Frequency Heatmap",
//     key: 1,
//     color: {
//       backGround: "linear-gradient(180deg, #ffa600 0%, #ff7c43 100%)",
//       boxShadow: "0px 10px 20px 0px #ffd6a6",
//     },
//     barValue: 85,
//     value: "Visualizing Keyword Usage",
//     // png: AiOutlineHeatMap,  // Heatmap icon
//     series: [
//             {
//               name: "Agriculture",
//               data: [4, 4,2 , 4, 1, 6, 9], // Example data from API
//             },
//             {
//               name: "Computer Network",
//               data: [7, 2,6 , 2, 1,4, 9], // Example data from API
//             },
//             {
//               name: "Convulational Neural Network",
//               data: [2, 2,5 , 4, 8, 2, 2], // Example data from API
//             },
//             {
//               name: "Generative AI",
//               data: [7, 2,6 , 2, 1,4, 9], // Example data from API
//             },
//             {
//               name: "Metallurgy",
//               data: [4, 4,2 , 4, 1, 6, 9], // Example data from API
//             },]},
  
//   {
//     title: "Scanned Documents Per Day",
//     key: 2,
//     color: {
//       backGround: "linear-gradient(180deg, #8bc34a 0%, #76b041 100%)",
//       boxShadow: "0px 10px 20px 0px #c8f1b0",
//     },
//     barValue: 90,
//     value: "Documents Processed",
//     // png: BiScan, // Scan icon
//     series: [
//       {
//         name: "Documents",
//         data: [5, 10, 15, 20, 25, 30, 35],  // Daily document count
//       },
//     ],
//   },
//   {
//     title: "Frequent Study Topics",
//     key: 3,
//     color: {
//       backGround: "linear-gradient(180deg, #03a9f4 0%, #0288d1 100%)",
//       boxShadow: "0px 10px 20px 0px #89d5f8",
//     },
//     barValue: 75,
//     value: "Trending Study Topics",
//     // png: FaBookOpen,  // Book icon
//     series: [
//       {
//         name: "Subjects",
//         data: [10, 15, 20, 10, 30],  // Example study frequency
//         categories: ["Math", "Science", "History", "Language", "Biology"],  // Topics
//       },
//     ],
//   },
// ];
