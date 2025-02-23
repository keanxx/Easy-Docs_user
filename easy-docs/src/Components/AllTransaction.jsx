import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Wrap the SweetAlert2 instance with react content support
const MySwal = withReactContent(Swal);

const AllTransaction = () => {
  // State to control if the transactions table (dropdown) is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Sample transaction data array
  const transactions = [
    {
      id: 1,
      requestedDocument: "Barangay Clearance",
      dateRequested: "2025-02-21",
      status: "Pending",
      certificateDetails: {
        Type: "Clearance",
        IssuedBy: "Barangay Official",
        ValidUntil: "2025-12-31",
      },
      pickupSchedule: "To be scheduled",
      remarks: "Processing",
    },
    {
      id: 2,
      requestedDocument: "Barangay Identification Card",
      dateRequested: "2025-02-20",
      status: "Approved",
      certificateDetails: {
        Type: "Identification Card",
        IssuedBy: "Barangay Office",
        ValidUntil: "2026-02-20",
      },
      pickupSchedule: "Ready for Pickup",
      remarks: "Awaiting collection",
    },
    {
      id: 3,
      requestedDocument: "Business Permit",
      dateRequested: "2025-02-19",
      status: "Processing",
      certificateDetails: {
        Type: "Permit",
        IssuedBy: "Municipal Office",
        ValidUntil: "2026-02-19",
      },
      pickupSchedule: "In progress",
      remarks: "Under review",
    },
  ];

  // Function: showDetails
  // Description: Formats and displays certificate details in a SweetAlert2 modal when "View Details" is clicked.
  const showDetails = (details) => {
    const formattedDetails = Object.entries(details)
      .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
      .join("<br>");

    MySwal.fire({
      title: "<h2 class='text-lg font-semibold'>Certificate Details</h2>",
      html: `<div class='text-left p-4 bg-gray-100 rounded-lg text-sm leading-6'>${formattedDetails}</div>`,
      icon: "info",
      confirmButtonText: "Close",
      customClass: {
        popup: "w-[90%] md:w-[400px] p-6",
        title: "text-lg md:text-xl",
        confirmButton: "text-sm md:text-base px-5 py-2 bg-[#4CAF50] text-white rounded-lg",
      },
    });
  };

  // Function: confirmRequest
  // Description: Opens a confirmation modal asking the user if they want to re-request the document.
  // If confirmed, it shows another modal stating that the request has been submitted.
  const confirmRequest = (documentName) => {
    MySwal.fire({
      title: "Confirm Request",
      text: `Are you sure you want to request ${documentName} again?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Request Again",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "bg-[#4CAF50] text-white px-4 py-2 rounded-lg",
        cancelButton: "bg-gray-300 px-4 py-2 rounded-lg",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Request Submitted",
          text: "Your request has been successfully submitted.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "bg-[#4CAF50] text-white px-4 py-2 rounded-lg",
          },
        });
      }
    });
  };

  return (
    <div className="p-6 border rounded-lg w-[90%] md:w-[75%] mx-auto mt-10 bg-white shadow-lg">
      {/* Dropdown Toggle: Clicking toggles display of the transactions table */}
      <div
        className="flex items-center justify-between cursor-pointer px-4 py-2 bg-gray-100 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">All Transactions</span>
        {isOpen ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
      </div>

      {/* Dropdown Content: Animated container for the transactions table */}
      <motion.div
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={isOpen ? { maxHeight: 600, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`overflow-hidden ${!isOpen ? "hidden" : "block"} mt-3`}
      >
        {/* Scrollable table wrapper */}
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[700px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#4CAF50] text-white text-sm uppercase">
                <th className="border p-3">Request #</th>
                <th className="border p-3">Requested Document</th>
                <th className="border p-3">Date Requested</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Certificate Details</th>
                <th className="border p-3">Pick-up Schedule</th>
                <th className="border p-3">Remarks</th>
                <th className="border p-3">Request Again</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="text-center border text-sm">
                  {/* Transaction ID */}
                  <td className="border p-3">{transaction.id}</td>
                  {/* Requested Document */}
                  <td className="border p-3">{transaction.requestedDocument}</td>
                  {/* Date Requested */}
                  <td className="border p-3">{transaction.dateRequested}</td>
                  {/* Transaction Status with conditional text color */}
                  <td
                    className={`border p-3 font-semibold ${
                      transaction.status === "Pending"
                        ? "text-yellow-500"
                        : transaction.status === "Approved"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  >
                    {transaction.status}
                  </td>
                  {/* Certificate Details: opens details modal on click */}
                  <td
                    className="border p-3 text-blue-600 underline cursor-pointer hover:text-blue-800"
                    onClick={() => showDetails(transaction.certificateDetails)}
                  >
                    View Details
                  </td>
                  {/* Pick-up Schedule */}
                  <td className="border p-3">{transaction.pickupSchedule}</td>
                  {/* Remarks */}
                  <td className="border p-3">{transaction.remarks}</td>
                  {/* Request Again Button: triggers confirmation modal */}
                  <td className="border p-3">
                    <button
                      className="bg-[#4CAF50] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#388E3C] transition"
                      onClick={() => confirmRequest(transaction.requestedDocument)}
                    >
                      Request
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AllTransaction;