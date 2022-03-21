import React from "react";
/* eslint-disable */
require("../middleware/auth");

export default function Dashboard(props) {
  const { user } = props;
  const debt = {
    department: 5000,
    faculty: 2000,
    student_affair: 2500,
    library: 1000,
    health_services: 7000,
    busary: 45000,
    accademic_affair: 2000,
    registrar: 6000
  };
  const debt2 = [
    { department: 5000 },
    { faculty: 2000 },
    { student_affair: 2500 },
    { library: 1000 },
    { health_services: 7000 },
    { busary: 45000 },
    { accademic_affair: 2000 },
    { registrar: 6000 }
  ];
  const match = {
    health_services: true,
    busary: true,
    accademic_affair: false,
    registrar: true
}
     
  const sum = () => {
    const newdebt = debt2.filter((item) => {
      // return item.health_services == true;
    })
     console.log(match, newdebt);
  }
  sum();
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
                      <i
                        className="fa fa-user-circle text-dark"
                        aria-hidden="true"
                      ></i>
                      {"Itoro Emmanuel Philip"}
                    </h3>
                    <p>{"Computer Science, Applied Science, 2019/2021"}</p>
                    <b className="m1-0">{"FPOCha2019"}</b>
                    {/* <!-- <p className="pricing__sentence">Single user license</p> --> */}
                  </div>
                  <div className="pricing__price">
                    {/* <span className="pricing__anim pricing__anim--1 text-success"> 
                      You are Cleared
                    </span> */}
                    <span className="pricing__anim pricing__anim--1 text-danger">
                      <span className="pricing__currency">₦</span>
                      3000
                    </span>
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
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="debt">₦{debt.department}</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td>Faculty</td>
                          <td>
                            <i
                              className="fa fa-times text-danger"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">₦{debt.faculty}</span>
                          </td>
                        </tr>
                        {/*  */}
                        <tr>
                          <td>Students Affair Unit</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">
                              ₦{debt.student_affair}
                            </span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Library</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">₦{debt.library}</span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Health Service Unit</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">
                              ₦{debt.health_services}
                            </span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Library</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">₦{debt.library}</span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Bursary</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">₦{debt.busary}</span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Accademic Affair</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">
                              ₦{debt.accademic_affair}
                            </span>
                          </td>
                        </tr>

                        {/*  */}
                        <tr>
                          <td>Registrar</td>
                          <td>
                            <i
                              className="fa fa-check text-success"
                              aria-hidden="true"
                            ></i>
                          </td>
                          <td>
                            <span className="cleared">₦{debt.registrar}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="pricing__action">
                      Print Clearance Reciept
                    </button>
                    {/* <button className="pricing__action">Clear Now</button> */}
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
