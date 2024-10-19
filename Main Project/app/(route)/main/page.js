
// "use client";



// const MainPage = () => {
//     return (
//         <div>
//             {/* <MainDash /> */}
//             hey
//         </div>
//     );
// };

// export default MainPage; // Ensure this is the default export



"use client";

import MainDash from './MainDash/MainDash'; // Ensure the import path is correct
import ChatbotModal from '@/components/ChatbotModal/ChatbotModal';

export default function MainPage() {
  return (
    <div>
      <MainDash />
      <ChatbotModal />
    </div>
  );
}
