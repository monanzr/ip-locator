import React, { useState } from "react";
import { Container, Logo, Heading, SubHeading, BackButton } from "./FormStyles";
import PhoneInput from "./components/PhoneInput";
import OtpInput from "./components/OtpInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [initialPhoneNumber, setInitialPhoneNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneSubmit = (data) => {
    setInitialPhoneNumber(data.phoneNumber);
    setIsOtpMode(true);
  };

  const handleOtpSubmit = (data) => {
    const otp = data.otp.join("");
    if (otp === "1111") {
      dispatch(login(otp));
      navigate("/ip-search");
    } else {
      toast("OTP وارد شده اشتباه است.");
    }
  };

  const handleChangePhone = () => {
    setIsOtpMode(false);
  };

  return (
    <Container>
      {isOtpMode && (
        <BackButton onClick={handleChangePhone}>
          <img src="assets/img/arrow.svg" />
        </BackButton>
      )}

      <Logo src="assets/img/LogoType.png" alt="Logo" />
      {!isOtpMode ? (
        <>
          <Heading>به پنل مدیریت تسک پادرو خوش آمدید</Heading>
          <SubHeading>برای ورود، لطفا شماره موبایل خود را وارد کنید</SubHeading>
          <PhoneInput
            onPhoneSubmit={handlePhoneSubmit}
            initialPhoneNumber={initialPhoneNumber}
          />
        </>
      ) : (
        <>
          <Heading>کد تایید را وارد کنید</Heading>
          <OtpInput
            initialPhoneNumber={initialPhoneNumber}
            onOtpSubmit={handleOtpSubmit}
            onChangePhone={handleChangePhone}
          />
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
