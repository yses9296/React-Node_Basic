import { Axios } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action'

function RegisterPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeCheckPassword = (e) => {
    setCheckPassword(e.target.value)
  }
  const onSubmitRegister = (e) => {
    e.preventDefault();

    if(password !== checkPassword){
      return alert('Password does not match')
    }
    
    let body = {
      email: email, 
      name: name, 
      password: password
    }

    dispatch(registerUser(body))
    .then(response => {
      if(response.payload.success){
        // props.history.push('/') //hoc autg 설정 필요
      }
      else {
        alert('Failed to Sign up, please try again.')
      }
    });
    
  }

  return (
    <div id="page" className='register_page'>
      <form onSubmit={onSubmitRegister}>
        <p>
          <label>Email</label>
          <input type="email" value={email} onChange={onChangeEmail}></input>
        </p>
        <p>
          <label>Name</label>
          <input type="text" value={name} onChange={onChangeName}></input>
        </p>
        <p>
          <label>Password</label>
          <input type="password" value={password} onChange={onChangePassword}></input>
        </p>
        <p>
          <label>Confirm Password</label>
          <input type="password" value={checkPassword} onChange={onChangeCheckPassword}></input>
        </p>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterPage