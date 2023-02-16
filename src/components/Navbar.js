import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src="./logo192.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />React JS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Choose color
                </a>
                <ul class="dropdown-menu">
                  <li><button type="button" class="dropdown-item bg-primary btn btn-primary" onClick={()=>props.changeBackGround("blue")}>Blue</button></li>
                  <li><button type="button" class="dropdown-item bg-danger btn btn-primary" onClick={()=>props.changeBackGround("red")}>Red</button></li>
                  <li><button type="button" class="dropdown-item bg-success btn btn-primary" onClick={()=>props.changeBackGround("green")}>Green</button></li>
                </ul>
              </li>
           
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode ==="light"?"dark":"light"}`} for="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired
  //Type -> String and It is required
}

Navbar.defaultProps = {
  title : "Title"
  //If title is not provided
}