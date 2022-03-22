import React, { useState } from 'react';
import { RegisterBar, Input } from './style';
const { REACT_APP_BASE_URL: url } = process.env;
export const Login = () => {
  const [register, setRegister] = useState({
    email: '',
    password: '',
  });

  const onRegister = () => {
    fetch(`${url}/public/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(register),
    }).then((res) =>
      res.json().then((res) => {
        localStorage.setItem('token', res?.data);
      })
    );
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  return (
    <RegisterBar>
      <h1>LOGIN</h1>
      <div>
        <Input
          name='email'
          value={register.email}
          type='gmail'
          placeholder='email'
          onChange={onChange}
        />
        <Input
          name='password'
          value={register.password}
          type='password'
          placeholder='password'
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onRegister}>LOGIN</button>
      </div>
    </RegisterBar>
  );
};
