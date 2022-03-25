import React from "react";
import Pay from "../components/Pay";
/* eslint-disable */
require("../middleware/auth"); 

export default function Dashboard(props) {
  const { user,api } = props;
  const debt = {
    department: 5000,
    faculty: 2000,
    student_affair: 2500,
    library: 1000,
    health_services: 7000,
    busary: 45000,
    accademic_affair: 2000,
    registrar: 6000,
  };
  const debt2 = {
    department: 5000,
    faculty: 2000,
    student_affair: 2500,
    library: 1000,
    health_services: 7000,
    busary: 45000,
    accademic_affair: 2000,
    registrar: 6000,
  };

  const sum = () => {
    try {
      if (user.department) {
        debt2.department=0
      }
      if (user.faculty) {
        debt2.faculty = 0;
      } if (user.student_affair) {
        debt2.student_affair = 0;
      } if (user.library) {
        debt2.library = 0;
      }   if (user.health_services) {
        debt2.health_services = 0;
      }   if (user.busary) {
        debt2.busary = 0;
      }   if (user.accademic_affair) {
        debt2.accademic_affair = 0;
      }   if (user.registrar) {
        debt2.registrar = 0;
      }
 
      const getCount = Object.values(debt2).reduce((a, b) => a + b, 0);

      return getCount;
    } catch (error) {
      
    }
  }; 

         const cash=(e)=>Intl.NumberFormat("en-US").format(e)
  return (
    <>
      <div id="fh5co-pricing" className="fh5co-bg-section">
        <div className="container">
          <div className="row">
            <div className="pricing pricing--rabten">
              <div className="col-md-8 m-auto animate-box shadow">
                <div className="pricing__item">
                  {/* <img src="" alt="" /> */}
                  <div className="wrap-price text-center">
                    {/* <!-- <div className="icon icon-user2"></div> --> */}
                    <h3 className="pricing__title">
                      {/* <img src="/logo.jpg" alt="" className="logo" /> */}
                      {" " + user.name}
                    </h3>
                    <p>{`${user._department} , ${user._faculty}, ${user.session}`}</p>
                    <b className="m1-0">{user.email}</b>
                    {/* <!-- <p className="pricing__sentence">Single user license</p> --> */}
                  </div>
                  <div className="pricing__price">
                    {(user.status && (
                      <span className="pricing__anim pricing__anim--1 text-success">
                        You are Cleared
                      </span>
                    )) || (
                      <span className="pricing__anim pricing__anim--1 text-danger">
                        <span className="pricing__currency">₦</span>
                        {cash(sum())}
                      </span>
                    )}
                    <span className="pricing__anim pricing__anim--2">
                      <span className="pricing__period"></span>
                    </span>
                  </div>
                  <div className="wrap-price">
                    <table className="table mb-5 text-left">
                      <thead>
                        <tr>
                          <th>Office</th>
                          <th>Clearance Status</th>
                          <th>
                            Owing(<s>paid</s>)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/*  */}
                        <tr>
                          <td>Department(HOD)</td>
                          <td>
                            {(user.department && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.department && "debt"}>
                              ₦{debt.department}
                            </span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td>Faculty</td>
                          <td>
                            {(user.faculty && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.faculty && "debt"}>
                              ₦{debt.faculty}
                            </span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td>Students Affair Unit</td>
                          <td>
                            {(user.student_affair && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.student_affair && "debt"}>
                              ₦{debt.student_affair}
                            </span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Library</td>
                          <td>
                            {(user.library && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.library && "debt"}>
                              ₦{debt.library}
                            </span>
                          </td>
                        </tr>

                        {/*  HealthServices*/}
                        <tr>
                          <td>Health Service Unit</td>
                          <td>
                            {(user.health_services && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.health_services && "debt"}>
                              ₦{debt.health_services}
                            </span>
                          </td>
                        </tr>

                        {/* busary */}
                        <tr>
                          <td>Bursary</td>
                          <td>
                            {(user.busary && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.busary && "debt"}>
                              ₦{debt.busary}
                            </span>
                          </td>
                        </tr>

                        {/*accedamicaffair  */}
                        <tr>
                          <td>Accademic Affair</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className={user.accademic_affair && "debt"}>
                              ₦{debt.accademic_affair}
                            </span>
                          </td>
                        </tr>

                        {/* Registrar */}
                        <tr>
                          <td>Registrar</td>
                          <td>
                            {(user.registrar && (
                              <i
                                className="fa fa-check text-success"
                                aria-hidden="true"
                              ></i>
                            )) || (
                              <i
                                className="fa fa-times text-danger"
                                aria-hidden="true"
                              ></i>
                            )}
                          </td>
                          <td>
                            <span className={user.registrar && "debt"}>
                              ₦{debt.registrar}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {(user.status && (
                      <button
                        className="pricing__action"
                        onClick={(e) => window.print()}
                      >
                        Print Clearance Reciept
                      </button>
                    )) || <Pay user={user} api={api} amount={sum()} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
