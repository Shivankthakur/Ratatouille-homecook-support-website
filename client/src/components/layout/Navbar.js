import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth, logout }) => {
  const authLinks = (
    <ul>
      <li>  
        <Link to="/profiles">Shops</Link>
      </li>
      <li>
        <Link to="/posts">Foodie Forum</Link>
      </li>
      <li>
        <Link to="/cart">
          <i className="fas fa-shopping-cart" /> My Cart
        </Link>
      </li>
      <li>
        <Link to="/orders">
          <i className="fas fa-concierge-bell" /> My Orders
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />
          <span className="hide-sm"> My Shop</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Shops</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const adminLinks = (
    <ul>
      <li>
        <Link to="/admin">Statistics</Link>
      </li>
      <li>  
        <Link to="/profiles">Shops</Link>
      </li>
      <li>
        <Link to="/posts">Foodie Forum</Link>
      </li>
      <li>
        <Link to="/cart">
          <i className="fas fa-shopping-cart" /> My Cart
        </Link>
      </li>
      <li>
        <Link to="/orders">
          <i className="fas fa-concierge-bell" /> My Orders
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />
          <span className="hide-sm"> My Shop</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  )

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-utensils"></i> Ratatouille
        </Link>
      </h1>
      <Fragment>{auth.isAuthenticated ?  authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
