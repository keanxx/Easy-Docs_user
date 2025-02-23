import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Transaction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 border rounded-lg w-[75%] mx-auto mt-5">
      {/* Dropdown Toggle */}
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">Barangay Clearance</span>
        {isOpen ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
      </div>

      {/* Dropdown Content with Table */}
      <motion.div
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={isOpen ? { maxHeight: 500, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`overflow-hidden bg-white rounded-lg ${!isOpen ? "hidden" : "block"} mt-3`}
      >
         <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#7DCB80]">
              <th className="border p-2">Request #</th>
              <th className="border p-2">Requested Document</th>
              <th className="border p-2">Date Requested</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Pick-up Schedule</th>
              <th className="border p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="text-center border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">Birth Certificate</td>
                <td className="border p-2">2025-02-21</td>
                <td className="border p-2">Processing</td>
                <td className="border p-2">12-04-35</td>
                <td className="border p-2">Awaiting Payment</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Transaction;
