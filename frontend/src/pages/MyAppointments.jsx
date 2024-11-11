import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { AppContext } from "../context/Context";

const MyAppointments = () => {
    const { doctors } = useContext(AppContext);
    const [doctorList, setDoctorList] = useState(doctors); // Track the list of doctors in the state
    const navigate = useNavigate(); // Initialize navigate function

    // Handle appointment cancellation
    const handleCancelAppointment = (doctorIndex) => {
        const updatedDoctors = [...doctorList]; // Create a copy of the current list
        const canceledDoctor = updatedDoctors.splice(doctorIndex, 1)[0]; // Remove the doctor
        updatedDoctors.push(canceledDoctor); // Add the doctor to the end of the list
        setDoctorList(updatedDoctors); // Update the state
    };

    // Redirect to payments page
    const handlePayOnline = () => {
        navigate('/payment/doc2/16:00'); // Redirect to '/payments' route
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {doctorList.slice(0, 2).map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 mb-6 bg-white shadow-lg rounded-lg p-6">
                    {/* Doctor Image */}
                    <div className="flex items-center justify-start space-x-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                        <p className="text-xl font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.speciality}</p>
                        <p className="text-sm font-medium mt-2">Address:</p>
                        <p className="text-sm">{item.address.line1}</p>
                        <p className="text-sm">{item.address.line2}</p>
                        <p className="text-sm text-gray-600 mt-2"><span className="font-medium">Date & Time:</span> {item.appointmentDate}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col justify-center items-center md:flex-col gap-4 mt-4 md:mt-0">
                        <button 
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none"
                            onClick={handlePayOnline} // Redirect to payment page
                        >
                            Pay Online
                        </button>
                        <button 
                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-500 focus:outline-none"
                            onClick={() => handleCancelAppointment(index)} // Call the cancel function on button click
                        >
                            Cancel Appointment
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyAppointments;
