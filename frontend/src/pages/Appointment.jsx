
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RelatedDoctors from "../Components/RelatedDoct";
import { AppContext } from "../context/Context";

const Appointment = () => {
    const { doctId } = useParams();
    const navigate = useNavigate(); 
    const { doctors } = useContext(AppContext);
    const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const [docInfo, setDocInfo] = useState(null);
    const [docSlot, setDocSlot] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState("");

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === doctId);
        setDocInfo(docInfo);
    };

    const getAvilableSlots = async () => {
        let allSlots = [];
        let Today = new Date();
        for (let i = 0; i < 7; i++) {
            let currDate = new Date(Today);
            currDate.setDate(Today.getDate() + i);
            let endTime = new Date();
            endTime.setDate(Today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);
            if (Today.getDate() === currDate.getDate()) {
                currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10);
                currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currDate.setHours(10);
                currDate.setMinutes(0);
            }
            let timeSlots = [];
            while (currDate < endTime) {
                let formattedTime = currDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                timeSlots.push({ dateTime: new Date(currDate), time: formattedTime });
                currDate.setMinutes(currDate.getMinutes() + 30);
            }
            allSlots.push(timeSlots);
        }
        setDocSlot(allSlots);
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, doctId]);

    useEffect(() => {
        if (docInfo) {
            getAvilableSlots();
        }
    }, [docInfo]);

    const handleSlotSelection = (i, time) => {
        setSlotIndex(i);  // Set the selected day index
        setSlotTime(time); // Set the selected slot time
    };

    const handleBooking = () => {
        if (slotTime) {
            // Navigate to the payment page with the selected doctor and slot details
            navigate(`/payment/${doctId}/${slotTime}`);
        } else {
            alert("Please select a time slot before booking.");
        }
    };

    if (!docInfo || !docSlot) {
        return <div className="text-center text-lg font-medium text-gray-700">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Doctor Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                    <img
                        src={docInfo.image}
                        alt={docInfo.name}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Doctor Info */}
                <div className="flex flex-col justify-between w-full md:w-2/3">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 mb-2">{docInfo.name}</h1>
                        <p className="text-lg text-gray-600 mb-4">{docInfo.speciality}</p>
                        <p className="text-sm text-gray-500">{docInfo.degree}</p>
                        <p className="text-sm text-gray-500 mb-4">{docInfo.experience}</p>
                    </div>

                    {/* About the Doctor */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">About</h2>
                        <p className="text-sm text-gray-600">{docInfo.about}</p>
                    </div>

                    {/* Fees and Address */}
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Consultation Fee: ₹{docInfo.fees}</p>
                        </div>
                        <div className="text-sm text-gray-500">
                            <p>{docInfo.address.line1}</p>
                            <p>{docInfo.address.line2}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slot Selection */}
            <div className="sm:ml-72 sm:pl-4 mt-6 font-medium text-gray-700">
                <p className="text-xl font-semibold text-gray-800 mb-4">Booking Slots</p>
                <div className="flex space-x-4 overflow-x-auto">
                    {docSlot.length && docSlot.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => handleSlotSelection(i, item[0].time)}
                            className={`text-center py-4 min-w-32 rounded-lg cursor-pointer 
                            ${slotIndex === i ? 'bg-[#6a4cfc] text-white' : 'bg-gray-200 text-gray-800'} 
                            border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#6a4cfc] hover:text-white`}
                        >
                            <p className="font-medium">
                                {daysOfWeek[item[0].dateTime.getDay()]}
                            </p>
                            <p className="font-semibold text-lg">{item[0].dateTime.getDate()}</p>
                        </div>
                    ))}
                </div>

                {docSlot.length && docSlot[slotIndex] && (
                    <div className="mt-6">
                        <p className="text-lg font-semibold text-gray-800">Available Times</p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {docSlot[slotIndex].map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSlotTime(item.time)}
                                    className={`px-6 py-2 rounded-lg cursor-pointer 
                                    ${slotTime === item.time ? "bg-[#6a4cfc] text-white" : "bg-gray-200 text-gray-800"} 
                                    border border-gray-300 hover:bg-[#6a4cfc] hover:text-white transition duration-200 ease-in-out`}
                                >
                                    {item.time}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <button onClick={handleBooking} className="bg-primary text-sm sm:text-base text-[#ffffff] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">Book an appointment</button>
            </div>
            <RelatedDoctors docId={doctId} speciality={docInfo.speciality} />
        </div>
    );
};

export default Appointment;
