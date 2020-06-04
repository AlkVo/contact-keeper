import React, { useState, useContext } from 'react';
import alterContext from '../../context/alter/alertContext';
const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const AlterContext = useContext(alterContext);
  const { setAlter } = AlterContext;
  const { name, email, password, password2 } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlter('请输入所有信息', 'danger');
    } else if (password !== password2) {
      setAlter('密码不一致，请重新输入', 'danger');
    }
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
          type='submit'
          value='注册'
          className='btn btn-primary btn-block'
        ></input>
      </form>
    </div>
  );
};

export default Register;
