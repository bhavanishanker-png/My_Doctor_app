import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [phone, setPhone] = useState('123-456-7890');
    const [address, setAddress] = useState('123 Main St, City, Country');
    const [profilePic, setProfilePic] = useState(null);
    const [newProfilePic, setNewProfilePic] = useState(null);
    const [gender, setGender] = useState('Male');
    const [birthDate, setBirthDate] = useState('1990-01-01');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        if (newProfilePic) {
            setProfilePic(URL.createObjectURL(newProfilePic));
        }
    };

    const handlePicChange = (e) => {
        setNewProfilePic(e.target.files[0]);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Picture */}
                <div className="flex justify-center">
                    <div className="w-32 h-32 mb-4">
                        <img
                            src={newProfilePic ? URL.createObjectURL(newProfilePic) : profilePic || assets.profile_pic}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full shadow-lg"
                        />
                        {isEditing && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePicChange}
                                className="mt-2 text-sm text-gray-600"
                            />
                        )}
                    </div>
                </div>

                {/* Profile Info */}
                <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            ) : (
                                <p className="text-lg text-gray-600">{name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            ) : (
                                <p className="text-lg text-gray-600">{email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            ) : (
                                <p className="text-lg text-gray-600">{phone}</p>
                            )}
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            ) : (
                                <p className="text-lg text-gray-600">{address}</p>
                            )}
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            {isEditing ? (
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            ) : (
                                <p className="text-lg text-gray-600">{gender}</p>
                            )}
                        </div>

                        {/* Birth Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Birth Date</label>
                            {isEditing ? (
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            ) : (
                                <p className="text-lg text-gray-600">{birthDate}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit/Save Button */}
            <div className="flex justify-end gap-4 mt-6">
                {isEditing ? (
                    <button
                        onClick={handleSaveClick}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Save Changes
                    </button>
                ) : (
                    <button
                        onClick={handleEditClick}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
