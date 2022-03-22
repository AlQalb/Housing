import React, { useState } from 'react';
import { RegisterBar, Input } from './style';
const { REACT_APP_BASE_URL: url } = process.env;
export const Register = () => {
  const [register, setRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roleIdSet: [1],
  });

  const onRegister = () => {
    fetch(`${url}/public/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(register),
    });
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
      <h1> REGISTER</h1>
      <div>
        <Input
          name='firstname'
          value={register.firstname}
          type='text'
          placeholder='firstname'
          onChange={onChange}
        />
        <Input
          name='lastname'
          value={register.lastname}
          type='text'
          placeholder='lastname'
          onChange={onChange}
        />
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
        <button onClick={onRegister}>REGISTER</button>
      </div>
    </RegisterBar>
  );
};
