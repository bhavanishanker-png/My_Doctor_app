import React from "react";

const Contact = () => {
    return (
        <div className="contact-page bg-gray-50 min-h-screen py-12 px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600">
                    We're here to help. Reach out to us using the information below.
                </p>
            </div>

            {/* Contact Information */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Address</h3>
                    <p className="text-gray-600 mb-2">123 Health Street</p>
                    <p className="text-gray-600 mb-2">Wellness City, Medistan</p>
                    <p className="text-gray-600">Zip Code: 12345</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h3>
                    <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
                    <p className="text-gray-600 mb-2">Fax: (098) 765-4321</p>
                    <p className="text-gray-600">Email: contact@healthclinic.com</p>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-5xl mx-auto mt-12 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509797!2d144.95373631550444!3d-37.81627917975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d633ccab%3A0xccc7d1b0f8c7ec0!2sHealth+Clinic!5e0!3m2!1sen!2sau!4v1614823609464!5m2!1sen!2sau"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
