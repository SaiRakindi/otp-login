import { useState } from "react";
import OTPInput from "./OTPInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    const regex = /[^0-9]/g;

    //Phone validation
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    //call Backend API

    setShowOtpField(true);
  };

  const handleOTPSubmit = (otp) => {
    console.log(otp);
  };

  return (
    <div>
      {!showOtpField ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OTPInput length={4} handleOTPSubmit={handleOTPSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
