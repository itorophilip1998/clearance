import axios from "axios";
import React, { useEffect, useState } from "react";
/* eslint-disable */

export default function Students(props) {
  const { api, token, user, config } = props.data;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/get-all`, config)
      .then((result) => {
        setData(result.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div className="p-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">RegNo/Email</th>
            <th scope="col">Session</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <th scope="row">{item.name}</th>
              <td>{item.email}</td>
              <td>{item.session}</td>
              <td>
                {(item.status && (
                  <span class="badge bg-success">Cleared</span>
                )) || <span class="badge bg-danger">Not Cleared</span>}
              </td>
              <td>
                {item.status && <i class="fas fa-pen text-success link"></i>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
