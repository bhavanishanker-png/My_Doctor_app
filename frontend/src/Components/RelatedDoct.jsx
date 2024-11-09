import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";  // Import PropTypes for type-checking

const RelatedDoctors = ({ speciality, docId }) => {
    const {doctors} = useContext(AppContext)
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors && doctors.length > 0 && speciality) {
      const docData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
      setRelDoc(docData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="w-full grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relDoc.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">No related doctors found.</p>
      ) : (
        relDoc.slice(0, 5).map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:shadow-xl hover:scale-105 hover:bg-gray-100"
            onClick={() => navigate(`/appointment/${item._id}`)}
          >
            <img
              src={item.image || "/default-image.jpg"} // Fallback image
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
        ))
      )}
    </div>
  );
};

RelatedDoctors.propTypes = {
  speciality: PropTypes.string.isRequired,
  docId: PropTypes.string.isRequired,
};

export default RelatedDoctors;
