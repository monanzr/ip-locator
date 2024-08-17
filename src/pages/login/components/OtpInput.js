import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, ErrorText, Link, Form, OtpContainer, ResendBox, SubHeading } from "../FormStyles";
import { onKeyNumber } from "../../../utils/validators";

const OtpInput = ({
  length = 4,
  initialPhoneNumber,
  onOtpSubmit,
  onChangePhone,
}) => {
  const inputsRef = useRef([]);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(60);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  useEffect(() => {
    let timer;
    if (resendDisabled && resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    } else if (resendCountdown <= 0) {
      setResendDisabled(false);
      setResendCountdown(60); 
    }

    return () => clearInterval(timer);
  }, [resendDisabled, resendCountdown]);

  const otpArray = watch("otp", Array(length).fill(""));

  const handleChange = (index, value) => {
    const newOtpArray = [...otpArray];
    newOtpArray[index] = value;

    setValue("otp", newOtpArray);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtpArray = [...otpArray];

      if (otpArray[index] === "") {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      } else {
        newOtpArray[index] = "";
        setValue("otp", newOtpArray);

        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      }
    } else if (e.key === "Delete") {
      e.preventDefault();
      const newOtpArray = [...otpArray];

      if (otpArray[index] !== "") {
        newOtpArray[index] = "";
        setValue("otp", newOtpArray);
      }

      if (index < length - 1 && otpArray[index] === "") {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const otpError = errors.otp?.type === "required" && errors.otp?.message;

  const handleResendCode = () => {
    if (!resendDisabled) {
      setResendDisabled(true); 
      setResendCountdown(60); 
    }
  };

  return (
    <Form onSubmit={handleSubmit(onOtpSubmit)}>
      <SubHeading>کد تایید برای شماره {initialPhoneNumber} پیامک شد</SubHeading>
      <Link onClick={onChangePhone}>
        تغییر شماره همراه
      </Link>
      <OtpContainer>
        {Array.from({ length }, (_, i) => (
          <Input
            key={i}
            type="text"
            maxLength="1"
            {...register(`otp.${i}`, {
              required: i === 0 ? "کد تایید الزامی است" : false,
            })}
            value={otpArray[i] || ""}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            ref={(el) => (inputsRef.current[i] = el)}
            style={{
              border: otpError ? "1px solid red" : "1px solid #ccc",
            }}
            onKeyPress={onKeyNumber}
          />
        ))}
      </OtpContainer>
      {otpError && <ErrorText>{otpError}</ErrorText>}
      <ResendBox>
        <p>کد را دریافت نکردید؟ </p>
        <Link
          href="#resend-code"
          onClick={handleResendCode}
          style={{ pointerEvents: resendDisabled ? "none" : "auto" }}
        >
          {resendDisabled
            ? `ارسال مجدد (${resendCountdown} ثانیه)`
            : "ارسال مجدد کد"}
        </Link>
      </ResendBox>
      <Button type="submit" disabled={!isValid}>
        {otpArray.join("") === "1111" ? "تایید" : "کد را وارد کنید"}
      </Button>
    </Form>
  );
};

export default OtpInput;
