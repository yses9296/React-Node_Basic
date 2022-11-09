import { Axios } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action'

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onSubmitLogin = (e) => {
    e.preventDefault();

    //server 전송
    let body = {
      email: email, 
      password: password
    }
    //server로 전송하기전 reducer 거치기
    dispatch(loginUser(body)); 
  }


  return (
    <div id="page" className='login_page'>
      <form onSubmit={onSubmitLogin}>
        <p>
          <label>Email</label>
          <input type="email" value={email} onChange={onChangeEmail}></input>
        </p>
        <p>
          <label>Password</label>
          <input type="password" value={password} onChange={onChangePassword}></input>
        </p>

        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage