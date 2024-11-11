import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Context";

const Doctors = () => {
    const { speciality } = useParams();
    const { doctors } = useContext(AppContext)
    const [filterDoc, setFilterDoc] = useState([]);
    const [selectedSpecialty, setSelectedSpecialty] = useState(speciality || ""); // To keep track of the selected specialty
    const navigate = useNavigate();

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [speciality, doctors]);

    // Handle the navigation and set the selected specialty
    const handleSpecialtyClick = (specialty) => {
        setSelectedSpecialty(specialty); // Update selected specialty
        navigate(`/doctors/${specialty}`);
    };
    const handleClick = (specialty) => {
        if (specialty === "All Doctors") {
          navigate("/doctors");
        } else {
          handleSpecialtyClick(specialty);
        }
      };
    return (
        <div className="p-8">
            <p className="text-xl font-semibold mb-6 text-gray-800">Browse through the doctors specialist.</p>

            {/* Filter Section */}
            <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
                {[
                    "General physician",
                    "Gynecologist",
                    "Dermatologist",
                    "Pediatrician",
                    "Neurologist",
                    "Gastroenterologist",
                    "All Doctors"
                ].map((specialty, index) => (
                    <p
                        key={index}
                        className={`text-sm font-medium text-gray-600 px-4 py-2 border rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-400 hover:text-white ${selectedSpecialty === specialty ? "bg-gray-400 text-white" : "text-gray-600"
                            }`}
                        onClick={() => handleClick(specialty)}
                    >
                        {specialty}
                    </p>
                ))}
            </div>
            {/* Doctor Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filterDoc.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => navigate(`/appointment/${item._id}`)}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center text-green-500 font-semibold">
                                <p className="text-lg">★</p>
                                <span className="ml-1 text-sm">Available</span>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.speciality}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
