import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthReducer';
import { StyledFormBtn, StyledFormInput, StyledFormLogin } from './Login.styled';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));

    reset();
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <StyledFormInput
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </label>

      <label>
        <span>Password:</span>
        <StyledFormInput
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <StyledFormBtn type="submit">Sign In</StyledFormBtn>
    </StyledFormLogin>
  );
};

export default LoginPage;
