import React, { useEffect, useRef, useState } from "react";

const OTPInput = ({ length, handleOTPSubmit }) => {
  const [OTP, setOTP] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  console.log(inputRefs);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, event) => {
    const { value } = event.target;

    if (isNaN(value)) return;

    const newOTP = [...OTP];

    //allow only one input
    newOTP[index] = value.substring(value.length - 1);
    setOTP(newOTP);

    //submit trigger

    const combinedOTP = newOTP.join("");

    if (combinedOTP.length === length) handleOTPSubmit(combinedOTP, newOTP);
  };

  const handleClick = (index) => {};

  const handlekeyDown = () => {};

  return (
    <div>
      {OTP.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            onClick={() => handleClick(index)}
            onKeyDown={(event) => handlekeyDown(index, event)}
            className="otp-input"
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
