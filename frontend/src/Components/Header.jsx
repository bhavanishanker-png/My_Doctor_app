import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
    return (
        // Header.js
        <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 md:p-5 lg:p-10 shadow-lg">
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[8vw]">
                <h1 className="text-4xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                    Book Appointment <br /> With Trusted Doctors
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 text-white text-base font-light">
                    <img src={assets.group_profiles} alt="Profiles" className="w-12 h-12 rounded-full shadow-lg" />
                    <p className="text-center md:text-left">
                        Browse through our extensive list of trusted doctors,<br className="hidden sm:block" />
                        and schedule your appointment hassle-free.
                    </p>
                </div>
                <a href="#speciality" className="flex items-center gap-2 bg-white text-teal-500 px-6 py-3 rounded-full text-base font-medium shadow-md hover:bg-teal-100 hover:scale-105 transition-transform duration-300 m-auto md:m-0">
                    Book Appointment
                    <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4" />
                </a>
            </div>
            <div className="md:w-1/2 relative mt-8 md:mt-0">
                <img className="w-full h-auto rounded-xl shadow-lg md:absolute bottom-0 object-cover" src={assets.header_img} alt="Header" />
            </div>
        </div>


    );
}

export default Header;
