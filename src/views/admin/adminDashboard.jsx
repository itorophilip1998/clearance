import React from "react";
import ClearedStudents from "../../components/ClearedStudents";
import NewStudent from "../../components/NewStudent";
import Students from "../../components/Students";
/* eslint-disable */
require("../../middleware/auth");

export default function AdminDashboard(props) {
  const { user } = props;
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
  const debt2 = [
    { department: 5000 },
    { faculty: 2000 },
    { student_affair: 2500 },
    { library: 1000 },
    { health_services: 7000 },
    { busary: 45000 },
    { accademic_affair: 2000 },
    { registrar: 6000 },
  ];
  const match = {
    health_services: true,
    busary: true,
    accademic_affair: false,
    registrar: true,
  };

  const sum = () => {
    const newdebt = debt2.filter((item) => {
      // return item.health_services == true;
    });
    console.log(match, newdebt);
  };
  sum();
  return (
    <>
      <div id="fh5co-pricing" className="fh5co-bg-section">
        <div className="container ">
          <div className="row ">
            <div className="pricing pricing--rabten">
              <div className="col-md-12 m-auto animate-box ">
                <div className="pricing__item shadow rounded-lg p-5">
                  <h3>Admin Dashboard</h3>
                  <div className="row m-0 p-3 mb-5">
                    <div className="col-md-3 mx-auto border shadow p-4 bg-success text-white link rounded-lg">
                      <div className="cards">
                        <div className="head-card">Students</div>
                        <div className="body-card">{500}</div>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto border shadow p-4 bg-danger text-white link rounded-lg">
                      <div className="cards">
                        <div className="head-card">Cleared Students</div>
                        <div className="body-card">{500}</div>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto border shadow p-4 bg-warning text-white link rounded-lg">
                      <div className="cards">
                        <div className="head-card">Uncleared Students </div>
                        <div className="body-card">{500}</div>
                      </div>
                    </div>
                  </div>

                  <nav>
                    <div
                      className="nav nav-tabs m-auto"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Students
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Cleared Students
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        New Student
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <Students />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <ClearedStudents />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <NewStudent />
                    </div>
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
