import React from "react";
import medical_records from "../medicalRecords";

function Records() {
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{"Patient Name"}</h4>
          <h5 id="patient-dob">DOB: {"Patient DOB"}</h5>
          <h5 id="patient-height">Height: {"Patient Height"}</h5>
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
        <tbody id="table-body" data-testid="patient-table">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Records;
