
import React from "react";
//import medical_records from "../medicalRecords.js";

function Search({ records, setId, id, selectionMade, setSelectionMade }) {

  let selection=id;


  function handleSelect(e) {
    selection=(e.target.value);
    console.log({selection}, {selectionMade} );
    setSelectionMade(false);
  }

  function handleShow() {
    
    // select will be a string - need a number:
    let temp = Number(selection)-1;
    console.log("showing anything?", temp);
     setId(temp);
     setSelectionMade(true);
     // id won't be updated yet
    // console.log({id}, typeof(id), selection);
  }

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue={id ||"0"} onChange={handleSelect}>
          <option value="0" disabled>
            Select Patient
          </option>
          
          {records.map((record) => (
            <option value={record.id} key={record.data[0].userName}>
              {record.data[0].userName} {record.data[0].id}
            </option>
          ))}
        </select>
      </div>

      <button type="button" data-testid="show" onClick={handleShow}>
        Show
      </button>
    </div>
  );
}

export default Search;
