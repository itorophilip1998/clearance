import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="fh5co-nav" role="navigation">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-right">
                <p className="site">www.asksu.com</p>
                <ul className="fh5co-social">
                  <li>
                    <a href="#">
                      <i className="icon-facebook2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-dribbble2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xs-7 ">
                <div id="fh5co-logo">
                  <a href="/">
                    <img className="logo" src="logo.jpg" />
                    <small className="logoText">AKSU CLearance Portal</small>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xs-5 text-right menu-1">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="about.html">About</Link>
                  </li>
                  <li>
                    <Link to="/Link">Dashboard</Link>
                  </li>
                  <li className="btn-cta ">
                    <a href="#">
                      <span>Login</span>
                    </a>
                    <a href="#" className="d-none">
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
