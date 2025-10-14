import React from "react";
//import medicalRecords from "../medicalRecords.js";

function Records({records, id}) {
  let SL = id+1;
  console.log('rendering:',{ id});
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{records[id].data[0].userName}</h4>
          <h5 id="patient-dob">DOB: {records[id].data[0]?.userDob}</h5>
          <h5 id="patient-height">Height: {records[id].data[0]?.meta.height}</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn">
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
      
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table" style={{color:'black'}}>
              {records[id].data.map((record, index) => (
            <tr key={record?.id}>
       
              <td>{SL}</td>
              <td>{record.timestamp}</td>
              <td>{record.diagnosis.name}</td>
              <td>{record.meta.weight}</td>
              <td>{record.doctor.name}</td>
            </tr>
          ))}
      
        </tbody>
      </table>
    </div>
  );
}

export default Records;
