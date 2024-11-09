import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const AboutHeroSection = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-blue-200 to-white py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">


                    <div className="mb-4">
                        <p className="text-xl font-bold text-blue-700 uppercase tracking-wider">About Us</p>
                    </div>


                    <div className="mb-8 max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                            Caring for Life, Nurturing Humanity
                        </h1>
                    </div>


                    <div className="w-full max-w-4xl relative">
                        <img
                            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            src={assets.header_img}
                            alt="Group of doctors standing together"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-300 via-transparent to-transparent opacity-30 rounded-lg"></div>
                    </div>
                </div>
            </section>


            <section className="reasons-section bg-gray-50 py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-bold text-blue-700">Why Choose Us</h3>
                        <p className="text-md font-medium text-gray-500 mt-2 max-w-2xl mx-auto">
                            Discover what makes us stand out in providing exceptional healthcare.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="reason-block bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                            <img
                                src="https://cdn.prod.website-files.com/6426aa53f075ab6c61341787/6426aa53f075aba6753417c2_Safety.webp"
                                alt="Safety icon"
                                className="w-16 sm:w-20 mb-4"
                            />
                            <h4 className="text-lg font-semibold text-blue-700">Safety First Quality</h4>
                            <p className="text-gray-500 mt-2 text-sm">
                                Experience compassionate care that prioritizes your safety at every step.
                            </p>
                        </div>

                        <div className="reason-block bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                            <img
                                src="https://cdn.prod.website-files.com/6426aa53f075ab6c61341787/6426aa53f075abaed43417c3_Satisfaction.webp"
                                alt="Satisfaction icon"
                                className="w-16 sm:w-20 mb-4"
                            />
                            <h4 className="text-lg font-semibold text-blue-700">Patient Satisfaction</h4>
                            <p className="text-gray-500 mt-2 text-sm">
                                We ensure a fulfilling experience for every patient we serve.
                            </p>
                        </div>

                        <div className="reason-block bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
                            <img
                                src="https://cdn.prod.website-files.com/6426aa53f075ab6c61341787/6426aa53f075abdd553417c1_Patient-Centric%20Approach.webp"
                                alt="Patient-centric icon"
                                className="w-16 sm:w-20 mb-4"
                            />
                            <h4 className="text-lg font-semibold text-blue-700">Patient-Centric Approach</h4>
                            <p className="text-gray-500 mt-2 text-sm">
                                A focus on providing personalized care for optimal health and well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutHeroSection;
