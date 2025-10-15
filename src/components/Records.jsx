import React from "react";
//import medicalRecords from "../medicalRecords.js";

function Records({records, setId, id, selectionMade}) {

 // console.log('rendering:',{ id});

  function handleClick() {
    if(!selectionMade){
      alert("Please select a patient first");
      return;
    }
    if (id < records.length - 1) {
      setId((prevId)=> prevId + 1);
    }else{
      setId(0);
    }
  }

  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{selectionMade ? records[id].data[0].userName : "Patient Name"}</h4>
          <h5 id="patient-dob">DOB: {selectionMade ? records[id].data[0]?.userDob: ""}</h5>
          <h5 id="patient-height">Height: {selectionMade ? records[id].data[0]?.meta.height: ""}</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" onClick={handleClick}>
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
       
              {selectionMade && records[id]?.data.map((record, index) => (
            <tr key={record?.id}>
       
              <td>{index+1}</td>
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
