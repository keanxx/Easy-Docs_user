import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Swal from "sweetalert2";

const BarangayIndigency = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to submit this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, submit it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      background: "#fff",
      customClass: {
        popup: "p-6 rounded-lg shadow-lg",
        title: "text-lg font-bold text-gray-900",
        htmlContainer: "text-base text-gray-700",
        confirmButton: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
        cancelButton: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "<span class='text-xl font-semibold'>Submitting request...</span>",
          width: window.innerWidth < 768 ? "75vw" : "450px",
          background: "#f0f0f0",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          customClass: {
            popup: "p-6 rounded-lg shadow-lg overflow-hidden",
            title: "text-xl font-semibold text-gray-900",
          },
        });

        setTimeout(() => {
          Swal.fire({
            icon: "success",
            title: "<span class='text-xl font-bold'>✅ Request Submitted!</span>",
            text: "Your request has been successfully sent. We will process it soon.",
            background: "#E6FFFA",
            color: "#065F46",
            width: window.innerWidth < 768 ? "75vw" : "400px",
            confirmButtonText: "OK",
            customClass: {
              popup: "p-6 rounded-lg shadow-lg overflow-hidden", // Prevent scrolling
              title: "text-xl font-bold text-green-800",
              htmlContainer: "text-lg text-gray-700", // Increased text size
              confirmButton: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
            },
          });
          setIsFormOpen(false);
        }, 2000);
      }
    });
  };

  return (
    <div className="p-4 border rounded-lg w-[75%] mx-auto mt-10">
      {/* Toggle Dropdown */}
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{title}</span>
        {isOpen ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
      </div>

      {/* Dropdown Content (Animated) */}
      <motion.div
        initial={{ maxHeight: 0, opacity: 0, padding: 0, marginTop: 0 }}
        animate={isOpen ? { maxHeight: 500, opacity: 1, padding: "12px", marginTop: "12px" } : { maxHeight: 0, opacity: 0, padding: 0, marginTop: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`overflow-hidden bg-white rounded-lg ${!isOpen ? "hidden" : "block"} p-4`}
      >
        <p className="text-gray-700">{content}</p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setIsFormOpen(true)}
          >
            Request
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => setIsOpen(false)} // Fixed issue here
          >
            Cancel
          </button>
        </div>
      </motion.div>

      {/* Request Form (Modal) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Request Barangay Indigency</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}> {/* Fixed onSubmit here */}
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Purpose</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter purpose"
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => setIsFormOpen(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BarangayIndigency;
