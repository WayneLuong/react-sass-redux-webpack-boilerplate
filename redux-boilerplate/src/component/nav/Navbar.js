import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item ml-auto'>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item ml-auto'>
              <Link className='nav-link' to="/add">Add</Link>
            </li>
            <li className='nav-item ml-auto'>
              <Link className='nav-link' to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
