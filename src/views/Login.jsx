import React, { useState } from "react";
// import dotenv from "dotenv";
// dotenv.config();

/* eslint-disable */

export default function Login(props) {
  const { api } = props;
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(props);

  const loginFunc = (e) => {
    e.preventDefault();
    fetch(`${api}/`);
  };

  return (
    <>
      <aside id="fh5co-hero">
        <div className="flexslider" style={{ height: "40vh !important" }}>
          <ul className="slides">
            <li style={{ backgroundImage: "url(images/img_bg_4.jpg)" }}>
              <div className="overlay-gradient"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center slider-text">
                    <div className="slider-text-inner">
                      <h1 className="heading-section">Welcome Back!</h1>
                      <h2>
                        All your information is always safe, access them easily
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div id="fh5co-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-1 animate-box">
              <div className="fh5co-contact-info">
                <h3>More Information</h3>
                <ul>
                  <li className="address">
                    Ikot Akpaden, <br /> Obioakpa, Akwa Ibom State, Nigeria
                  </li>
                  <li className="phone">
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </li>
                  <li className="email">
                    <a href="mailto:info@yoursite.com">Aksu@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <h3>Login</h3>
              <form onSubmit={loginFunc}>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Use Your Reg No"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Use Your Reg No"
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary rounded-0"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
