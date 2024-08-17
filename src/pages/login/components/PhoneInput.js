import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, ErrorText, LoginText, Form, Link } from '../FormStyles';

const PhoneInput = ({ onPhoneSubmit, initialPhoneNumber }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  return (
    <Form onSubmit={handleSubmit(onPhoneSubmit)}>
      <Input
        type="text"
        defaultValue={initialPhoneNumber}
        placeholder="شماره موبایل"
        {...register('phoneNumber', {
          required: 'شماره موبایل الزامی است',
          pattern: {
            value: /^(\+98|0)?9\d{9}$/,
            message: 'شماره موبایل نامعتبر است',
          },
        })}
        error={errors.phoneNumber}
      />
      {errors.phoneNumber && <ErrorText>{errors.phoneNumber.message}</ErrorText>}
      <Button type="submit">ارسال کد تایید</Button>
      <LoginText>
        حساب کاربری ندارید؟ <Link href="/">ثبت‌نام</Link>
      </LoginText>
    </Form>
  );
};

export default PhoneInput;
