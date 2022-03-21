import React, { useState } from "react";
import axios from "axios";
/* eslint-disable */

export default function Login(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { api } = props;
  const loginFunc = async (e) => {
    e.preventDefault(); 
    axios
      .post(`${api}/signin`, data)
      .then((res) => { 
        const { role } = res.data.user; 
        localStorage.setItem("role", role);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.access_token);
        if (role == 'user') { location.href = "/dashboard" }
        else if(role=='admin'){location.href = "/admin/dashboard"; }
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="fh5co-loader"></div>

      <div id="fh5co-contact" className="bg-light">
        <div className="container ">
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
            <div className="col-md-6 animate-box shadow p-4 border  bg-white">
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
