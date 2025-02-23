import React, { useState, useRef, useEffect } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a number is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    setCanResend(false);
  };

  const isOtpFilled = otp.every((digit) => digit !== "");

  return (
    <div className="flex flex-col items-center justify-center  md:mt-44 mt-[150px] bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-auto text-center border border-green-500">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <p className="text-gray-600 mb-4">Enter the 6-digit code sent to your email.</p>

        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
              className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
          ))}
        </div>

        <button
          className={`w-full p-2 rounded-lg font-semibold ${
            isOtpFilled ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!isOtpFilled}
        >
          Verify OTP
        </button>

        <div className="mt-4 text-gray-600">
          {canResend ? (
            <button className="text-green-500 font-semibold" onClick={handleResend}>
              Resend OTP
            </button>
          ) : (
            <p>Resend OTP in {timer}s</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
