import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/AuthReducer';
import {
  StyledFormRegister,
  StyledRegisterBtn,
  StyledRegisterInput,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));

    reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <StyledRegisterInput
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <span>Name:</span>
        <StyledRegisterInput
          {...register('name', { required: true })}
          type="text"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Password:</span>
        <StyledRegisterInput
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <StyledRegisterBtn type="submit">Sign Up</StyledRegisterBtn>
    </StyledFormRegister>
  );
};

export default RegisterPage;
