


// "use client";
// import React, { useState, useEffect } from 'react';
// import { auth, provider } from "../../app/firebase/config.js"; // Import Firebase config
// import { signInWithPopup, signOut } from "firebase/auth"; // Import Firebase functions
// import { useRouter } from 'next/router'; // For navigation

// import './Sidebar.css';
// import Image from 'next/image'; // Import next/image for optimized images
// import Link from 'next/link'; // Import next/link for routing
// import Logo from '../../public/assets/imgs/planting.png';
// // import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../../Data/Data";
// import { UilBars } from "@iconscout/react-unicons";
// import { motion } from "framer-motion";



// import { FaSignInAlt } from "react-icons/fa";
// import { CiLogout } from "react-icons/ci";

// const Sidebar = () => {
//     const [selected, setSelected] = useState(0);
//     const [expanded, setExpanded] = useState(true);
//     const [isClient, setIsClient] = useState(false);
//     const [windowWidth, setWindowWidth] = useState(0);

//     const [user, setUser] = useState(null); // State to track authenticated user
//     const router = useRouter(); // For routing

//     useEffect(() => {
//         setIsClient(true);
//         setWindowWidth(window.innerWidth);

//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);
//         // Firebase Authentication state listener
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUser(user); // Set user if logged in
//             } else {
//                 setUser(null); // Reset user if logged out
//             }
//         });


//         return () => {
//             window.removeEventListener('resize', handleResize);
//             unsubscribe(); // Unsubscribe from auth state changes
//         };
//     }, []);



//  // Google Sign-In function
//  const handleSignIn = async () => {
//     try {
//         const result = await signInWithPopup(auth, provider);
//         setUser(result.user); // Set authenticated user
//     } catch (error) {
//         console.error("Error during sign-in:", error);
//     }
// };

// // Logout function
// const handleSignOut = async () => {
//     try {
//         await signOut(auth);
//         setUser(null); // Reset user after sign-out
//         router.push('/'); // Redirect to homepage
//     } catch (error) {
//         console.error("Error during sign-out:", error);
//     }
// };





//     const sidebarVariants = {
//         true: {
//             left: '0'
//         },
//         false: {
//             left: '-60%'
//         }
//     };

//     return (
//         <>
//             <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
//                 {/* <UilBars /> */}
//             </div>
//             <motion.div className='sidebar'
//                 variants={sidebarVariants}
//                 animate={isClient && (windowWidth <= 768 ? `${expanded}` : '')}
//             >
//                 {/* Logo */}
//                 <div className="logo">
//                     <Image src={Logo} alt="logo" width={50} height={50} /> {/* Use Next.js Image component */}
//                     <span>
//                         Krishi<span>S</span>hakti
//                     </span>
//                 </div>

//                 <div className="menu">
//                     {SidebarData.map((item, index) => {
//                         const path = item.heading === "Home" ? "/" : `/${item.heading.toLowerCase()}`;
//                         return (
//                             // <Link
//                             //     href={path}
//                             //     key={index}
//                             //     className={selected === index ? "menuItem active" : "menuItem"}
//                             //     onClick={() => setSelected(index)}
//                             // >
//                             //     <item.icon style={{ fontSize: 26 }}/>
//                             //     <span className='font-bold text-[15px] whitespace-nowrap'>{item.title}</span>
//                             // </Link>


//                             <Link
//                                 href={path}
//                                 key={index}
//                                 className={selected === index ? "menuItem active" : "menuItem"}
//                                 onClick={() => setSelected(index)}
//                                 style={{ display: 'flex', alignItems: 'center' }}  // Flexbox to control layout
//                             >
//                                 {/* Icon with fixed size */}
//                                 <span style={{ minWidth: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                     <item.icon style={{ fontSize: 26 }} />
//                                 </span>

//                                 {/* Text with nowrap */}
//                                 <span className='font-bold text-[15px] whitespace-nowrap ml-2'>
//                                     {item.title}
//                                 </span>
//                             </Link>

//                         );
//                     })}



//                     {/* Signout Icon
//                     <div className="menuItem">
//                         <FaSignInAlt style={{ fontSize: 26 }}/>
//                     </div>
//                 </div> */}


//                 {/* Google Sign-In / Logout Button */}
//                 <div className="menuItem" onClick={user ? handleSignOut : handleSignIn}>
//                         {user ? <CiLogout style={{ fontSize: 26 }} /> : <FaSignInAlt style={{ fontSize: 26 }} />}
//                     </div>

//                     {/* Display user name if authenticated */}
//                     {user && (
//                         <div className="welcome-message">
//                             <p>Hey {user.displayName}!</p>
//                         </div>
//                     )}
//                 </div>



//             </motion.div>
//         </>
//     );
// }

// export default Sidebar;


"use client";
import React, { useState, useEffect } from 'react';
import { auth, provider } from "../../app/firebase/config.js";
import { signInWithPopup, signOut } from "firebase/auth";
import './Sidebar.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/imgs/planting.png';
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [user, setUser] = useState(null); // State to track authenticated user

    useEffect(() => {
        // Check if we are on the client side
        setIsClient(true);

        // Update window width
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user); // Set user state with Firebase user object
            } else {
                setUser(null); // Reset user state if not logged in
            }
        });
        return () => unsubscribe(); // Clean up the subscription on unmount
    }, []);

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error during sign-in: ", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear user state after logout
        } catch (error) {
            console.error("Error during sign-out: ", error);
        }
    };

    return (
        <>
            <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
                {/* Toggle icon can go here */}
            </div>
            <motion.div className='sidebar'
                variants={sidebarVariants}
                animate={isClient && (windowWidth <= 768 ? `${expanded}` : '')}
            >
                {/* Logo */}
                <div className="logo">
                    <Image src={Logo} alt="logo" width={50} height={50} />
                    <span>
                        Mind<span>S</span>cribe
                    </span>
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        const path = item.heading === "Home" ? "/main" : `/main/${item.heading.toLowerCase()}`;
                        return (
                            <Link
                                href={path}
                                key={index}
                                className={selected === index ? "menuItem active" : "menuItem"}
                                onClick={() => setSelected(index)}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <span style={{ minWidth: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <item.icon style={{ fontSize: 26 }} />
                                </span>
                                <span className='font-bold text-[15px] whitespace-nowrap ml-2'>
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}

                    {/* Signout or Signin Icon */}
                    <div className="menuItem" onClick={user ? handleSignOut : handleSignIn}>
                        {user ? (
                            <>
                                <CiLogout style={{ fontSize: 26 }} />
                                <span className="ml-2">{user.displayName || 'User'}</span> {/* Display user's name */}
                            </>
                        ) : (
                            <>
                            <FaSignInAlt style={{ fontSize: 26 }} />
                            <span className="ml-2">Log In</span> {/* Show "No User" when not logged in */}
                            </>
                            
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
