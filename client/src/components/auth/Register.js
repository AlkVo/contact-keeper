import React, { useState } from 'react';
const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('注册用户');
  };

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <div className='form-container'>
      <h1>
        用户<span className='text-primary'>注册</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>名字</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          ></input>
        </div>
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
        <div className='form-group'>
          <label htmlFor='name'>确认密码</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
          ></input>
        </div>
        <input
          type='sumbmit'
          value='注册'
          className='btn btn-primary btn-block'
        ></input>
      </form>
    </div>
  );
};

export default Register;
