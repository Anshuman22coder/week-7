import { useRecoilState } from "recoil";
import { login, otpError, phoneNumber } from "../store/atoms/allInOne";
import { useEffect, useRef, useState } from "react";

const corretOtp = JSON.stringify(Math.floor(Math.random() * 10000));
console.log(corretOtp);
function OtpLogin() {
  const otpBoxReference = useRef([]);
  const [phoneNo, setPhoneNo] = useRecoilState(phoneNumber);
  const [phoneNoEnter, setPhoneNoEnter] = useState(true);
  const [correctOtp, setCorrectOtp] = useState(false);
  const [error, seterror] = useRecoilState(otpError);

  const [otp, setOtp] = useRecoilState(login);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 4 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 4 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== corretOtp) {
      seterror("❌ Wrong OTP Please Check Again");
    } else {
      seterror(null);
    }
  }, [otp, seterror]);

  return (
    <>
      <h1>Login via OTP</h1>
      {phoneNoEnter ? (
        <div>
          <input
            type="number"
            placeholder="enter the number"
            value={phoneNo}
            maxLength={10}
            minLength={10}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <button onClick={() => setPhoneNoEnter(!phoneNoEnter)}>
            Send OTP
          </button>
        </div>
      ) : !correctOtp ? (
        <div>
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
            />
          ))}
          <p>{error}</p>
          <button onClick={() => setCorrectOtp(true)}>Login</button>
        </div>
      ) : (
        <div>
          <h1>hii you have login successfull</h1>
        </div>
      )}
    </>
  );
}

export default OtpLogin;
