import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>主页</Link>
        </li>
        <li>
          <Link to='/about'>关于</Link>
        </li>
        <li>
          <Link to='/rigster'>注册</Link>
        </li>
        <li>
          <Link to='/login'>登录</Link>
        </li>
      </ul>
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
