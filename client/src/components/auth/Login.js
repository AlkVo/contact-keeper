import React, { useState } from 'react';
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('登录用户');
  };

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <div className='form-container'>
      <h1>
        用户<span className='text-primary'>登录</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>邮件</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='name'>密码</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          ></input>
        </div>
        <input
          type='submit'
          value='登录'
          className='btn btn-primary btn-block'
        ></input>
      </form>
    </div>
  );
};

export default Login;
