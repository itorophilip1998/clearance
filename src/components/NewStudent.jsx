import axios from 'axios';
import React,{useState} from 'react'
import Loader from './Loader';
/* eslint-disable */

export default function NewStudent(props) {
  const [load, setLoad] = useState(false);
  const {api, token, user,config}=props.data
  const [data, setData] = useState({
    email: "FPOCSHA20001",
    password: "FPOCSHA20001",
    // profile
    name: "",
    session: "2021/2022",
    _department: "Computer Science",
    _faculty: "Applied Science",
    status: false,

    // officess
    department: false,
    faculty: false,
    student_affair: false,
    library: false,
    health_services: false,
    busary: false,
    accademic_affair: false,
    registrar: false,
  });  
  

  const createStudent = (e) => {
    e.preventDefault();   
    setLoad(true);
    axios.post(`${api}/signup`,data,config).then((res) => {
      setLoad(false);
      location.reload()
      
    }).catch((err) => {
      setLoad(false);

    });
  };
  return (
    <div className="text-dark">
      {load && <Loader />}
      <form onSubmit={createStudent}>
        <div className="row m-0">
          <div className="col-md-5 mx-auto  p-4">
            <h6 className="text-muted">Student Personal Information</h6>
            {/* email */}
            <div className="form-group text-left mt-5 ">
              <input
                type="text"
                className="form-control"
                placeholder="Email Must be RegNo"
                value="FPOCSHA20001"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            {/* password */}
            <div className="form-group text-left mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password Must be RegNo"
                value="FPOCSHA20001"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            {/* name */}
            <div className="form-group text-left mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            {/* session */}
            <div className="form-group text-left mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="session"
                value="2021/2022"
                required
                onChange={(e) => setData({ ...data, session: e.target.value })}
              />
            </div>
            {/* _department */}
            <div className="form-group text-left mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="_department"
                value="Computer Science"
                required
                onChange={(e) =>
                  setData({ ...data, _department: e.target.value })
                }
              />
            </div>

            {/* _faculty */}
            <div className="form-group text-left mt-3">
              <input
                type="text"
                required
                className="form-control"
                placeholder="_faculty"
                value="Applied Science"
                onChange={(e) => setData({ ...data, _faculty: e.target.value })}
              />
            </div>

            {/* button */}
            <div className="form-group text-left mt-5">
              <input
                type="submit"
                required
                className="form-control bg-primary text-white"
                value={"Create Student"}
              />
            </div>
          </div>

          {/* Offices */}
          <div className="col-md-6 mx-auto  p-4">
            <h6 className="text-muted">Offices/Unit for Clearance</h6>
            {/* department */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Department</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="department"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, department: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="department"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, department: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* faculty */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Faculty</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="faculty"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, faculty: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="faculty"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, faculty: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* student_affair */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Student Affair</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="student_affair"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, student_affair: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="student_affair"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, student_affair: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* student_affair */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Library</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="library"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, library: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="library"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, library: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* health_services */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Health Services</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="health_services"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, health_services: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="health_services"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, health_services: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* busary */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Busary</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="busary"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, busary: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="busary"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, busary: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* busary */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Accademic Affair</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="accademic_affair"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, accademic_affair: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="accademic_affair"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, accademic_affair: false })}
                />
                {" Not Cleared "}
              </label>
            </div>

            {/* registrar */}
            <div className="inputRadio text-left border-bottom py-2">
              <div className="headText">Registrar</div>
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="registrar"
                  className="custom-control-input link"
                  onClick={(e) => setData({ ...data, registrar: true })}
                />
                {" Cleared "}
                <input
                  type="radio"
                  name="registrar"
                  className="custom-control-input link ml-3"
                  onClick={(e) => setData({ ...data, registrar: false })}
                />
                {" Not Cleared "}
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
