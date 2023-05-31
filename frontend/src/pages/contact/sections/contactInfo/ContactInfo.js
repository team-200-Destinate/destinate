import React, { useState } from "react";
import "./contact.scss";

function ContactInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="contactInfo flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-2/3">
        <h1 className="text-3xl font-bold mb-4 text-center">Get In Touch</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-950 text-white font-medium py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>

    

    </section>
  );
}

export default ContactInfo;


  