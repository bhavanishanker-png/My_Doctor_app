import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
    return (
        <div className="flex flex-col items-center p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">Top Doctors to Book</h1>
            <p className="text-center mb-6">Simply browse through our extensive list of trusted doctors.</p>
            <div className="w-full grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.slice(0, 10).map((item) => (
                    <div
                        key={item._id}
                        className="bg-white p-4 rounded-lg shadow-lg transition-transform transform  hover:shadow-xl hover:scale-105 hover:bg-gray-100"
                        onClick={() => navigate(`/appointment/${item._id}`)}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center text-green-500">
                                <p className="text-xl">★</p>
                                <p className="ml-1 text-sm">Available</p>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.speciality}</p>
                    </div>
                ))}
            </div>
            <button
                className="mt-4 md:mt-8 bg-teal-500 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-teal-600 transition-colors duration-300"
                aria-label="More options"
                onClick={() => {
                    navigate("/doctors");
                    window.scrollTo(0, 0);  
                }}
            >
                More
            </button>
        </div>
    );
};

export default TopDoctors;
