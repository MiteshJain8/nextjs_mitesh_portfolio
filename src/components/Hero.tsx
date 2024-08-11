"use client";
import React from "react";
import Image from "next/image";
import profilegif from "../assets/profilegif.gif"

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1947_35%,#8F5C55_60%,#DBAF6E_80%)]">
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[530px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1947)]"></div>
            <div className="relative">
                <div className="font-bold lg:text-8xl md:text-7xl text-5xl text-center">
                    <h1 className="text-[#98B4CE]">Hi, my name is</h1>
                    <h1 className="text-[#b3ce98]">Mitesh Jain</h1>
                </div>

                <p className="text-center font-serif font-semibold lg:text-xl md:text-lg mx-auto mt-8 text-white/80">
                    Web developer and a machine learning enthusiast. <br />
                    Currently learning AI/ML, Backend Development.
                </p>
                
                <Image
                    src={profilegif} 
                    alt="profile pic" 
                    unoptimized={true}
                    className="h-auto w-auto mx-auto mt-8"
                    />

            </div>
        </div>
    );
};

export default Hero;
