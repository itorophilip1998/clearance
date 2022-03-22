import React from "react"; 
/* eslint-disable */
export default function Header(props) {
  const { token } = props; 
  const logout=()=> {
    localStorage.clear()
    window.location.href='/dashboard'
  }
  return (
    <div>
      <nav className="fh5co-nav" role="navigation">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-right">
                <p className="site">www.asksu.com</p>
                <ul className="fh5co-social float-right">
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
                    <img className="logo" src="/logo.jpg" />
                    <small className="logoText">AKSU CLearance Portal</small>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xs-5 text-right menu-1">
                <ul className="float-right">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>

                                  
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li className="btn-cta rounded-lg link">
                    {!token && <a href="/login" >
                      <span>Login</span>
                    </a>}
                    { token && <a onClick={logout} >
                      <span>Logout</span>
                    </a> }
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
