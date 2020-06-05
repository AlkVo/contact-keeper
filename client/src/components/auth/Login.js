import React, { useState, useContext, useEffect } from 'react';
import alertContext from '../../context/alter/alertContext';
import authContext from '../../context/auth/authContext';

const Login = (props) => {
  const AlertContext = useContext(alertContext);
  const { setAlter } = AlertContext;

  const AuthContext = useContext(authContext);
  const { login, clearErrors, error, isAuthenticated } = AuthContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === '用户未注册' || error === '密码错误') {
      setAlter(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') setAlter('请填写完所有信息', 'danger');
    else login({ email, password });
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
            required
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='name'>密码</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
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
