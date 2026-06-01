"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CoordinatorCard from "@/components/CoordinatorCard";
import CicleImage from "../../../public/staticAssets/images/Circle.png";

const OfficeBearers = () => {
    const [lessThanXl, setLessThanXl] = useState(false);


    const officeBearers = [
        {
            name: "Sonu Jhajharia",
            role: ["Community Lead"],
            image: "/leads/sonu_j.jpeg",
            linkedin: "https://www.linkedin.com/in/abdulsubhan12/",
            github: "http://github.com/gitsubh7",
        },
        {
            name: "Ravi Upadhyay",
            role: ["Community Co-Lead"],
            image: "/leads/ravi_up.jpeg",
            linkedin: "https://www.linkedin.com/in/piyuush-singh/",
            github: "https://github.com/piyuuussh",
        },
        {
            name: "Ashutosh Panda",
            role: ["Adminstrative Lead","Gray Interface Lead"],
            image: "/leads/ABHINAV_SINGH.jpeg",
            linkedin: "https://www.linkedin.com/in/abhinavs13",
            github: " https://github.com/Abhinav1341",
        },
        {
            name: "Vasu Choudhari",
            role: ["Technical Lead"],
            image: "/leads/FlutterLead.png",
            linkedin: "https://www.linkedin.com/in/devendra-singh-ba1917257",
            github: "https://github.com/dev04sa",
        },
        {
            name: "Devang Sharma",
            role: ["Secretary"],
            image: "/leads/Komal_Kumari.jpg",
            linkedin: "https://www.linkedin.com/in/komal-kumari-79234a258/",
            github: "https://github.com/komal-nitp",
        },
        {
            name: "Prisha Garg",
            role: ["Treasurer"],
            image: "/leads/Komal_Kumari.jpg",
            linkedin: "https://www.linkedin.com/in/komal-kumari-79234a258/",
            github: "https://github.com/komal-nitp",
        },
        {
            name: "Sanjeet Raj",
            role: ["Web Lead"],
            image: "/leads/SAHITYA_ARYAN.png",
            linkedin: "https://www.linkedin.com/in/sahityaaryan/",
            github: "https://github.com/Sahityaaryan",
        },
        {
            name: "Suryakant Acharya",
            role: ["Gray Interface Co-Lead"],
            image: "/leads/Suryakant_Acharya.jpg",
            linkedin: "https://www.linkedin.com/in/komal-kumari-79234a258/",
            github: "https://github.com/komal-nitp",
        },
        {
            name: "Tanay Palekar",
            role: ["Team Noughat(Flutter) Lead"],
            image: "/leads/CHIRAG_KUMAR.jpg",
            linkedin:
                "https://www.linkedin.com/in/chirag-kumar-rai-bbb009271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: "https://github.com/chiragrai31",
        },
        {
            name: "Nandini Prasad",
            role: ["Pixelbyte(Design) Lead"],
            image: "/leads/SHIVA_SINGH_BAGRI.jpg",
            linkedin: "https://www.linkedin.com/in/shiva-singh-bagri-060089174",
            github: " https://GitHub.com/autobot37",
        },
        {
            name: "Ankur Verma",
            role: ["Blockchain Lead"],
            image: "/leads/GOVIND_SINGH.jpg",
            linkedin: "https://www.linkedin.com/in/govind-singh-a925471a1",
            github: " https://github.com/GovindSinghh",
        },
        {
            name: "Aditya Raj",
            role: ["Social Media Lead"],
            image: "/leads/Bobbala_Maheedhar.jpg",
            linkedin: "https://www.linkedin.com/in/maheedhar-bobbala-9739a1276/",
            github: " https://github.com/maheedhar20",
        },
        {
            name: "Shivendu Kumar",
            role: ["Event Lead(Patna Campus)"],
            image: "/leads/Bobbala_Maheedhar.jpg",
            linkedin: "https://www.linkedin.com/in/maheedhar-bobbala-9739a1276/",
            github: " https://github.com/maheedhar20",
        },
        {
            name: "Harsh Topno Martin",
            role: ["Event and PR Lead(Bihta Campus)"],
            image: "/leads/Harsh_M_Topno.jpg",
            linkedin: "https://www.linkedin.com/in/maheedhar-bobbala-9739a1276/",
            github: " https://github.com/maheedhar20",
        },
        
    ];

    useEffect(() => {
        setLessThanXl(window.innerWidth <= 914);

        const handleResize = () => {
            setLessThanXl(window.innerWidth <= 914);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const lessThanXl = window.innerWidth <= 914;
    return (
        <div className="w-screen">
            <Image
                alt="CicleImage"
                className={`absolute xl:top-[-120px] lg:top-[650px] sm:scale-[0.9] z-0 ${lessThanXl && "hidden"
                    }`}
                src={CicleImage}
            />
            <h1 className="text-white text-center lg:text-[100px] sm:text-7xl text-[43px] md:py-16 md:pb-10 py-5 px-4">
                Office Bearers
            </h1>
            <div className="grid gap-10 sm:gap-40 mt-10 sm:mt-20">
                {/* First Row: 1-2 Cards on Mobile, 2 Cards on Larger Screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 justify-center">
                    {officeBearers.slice(0, 2).map((coordinator, index) => (
                        <CoordinatorCard key={index} {...coordinator} />
                    ))}
                </div>

                {/* Subsequent Rows: 2 Columns on Mobile, 4 Columns on Larger Screens */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-5 sm:gap-x-11 gap-y-20 sm:gap-y-40 justify-center">
                    {officeBearers.slice(2).map((coordinator, index) => (
                        <CoordinatorCard key={index + 2} {...coordinator} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfficeBearers;
