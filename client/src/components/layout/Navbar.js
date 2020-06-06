import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import authContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const AuthContext = useContext(authContext);
  const { isAuthenticated, user, logout } = AuthContext;

  const onLogout = () => {
    logout();
  };
  const userLink = (
    <Fragment>
      <li>Hello , {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <li>
        <Link to='/register'>注册</Link>
      </li>
      <li>
        <Link to='/login'>登录</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? userLink : guestLink}</ul>
    </div>
  );
};

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};
export default Navbar;
