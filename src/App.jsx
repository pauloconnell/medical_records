import React from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";


const App = () => {

  console.log({medical_records})
  const [id, setId] = React.useState(0);
  

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search records={medical_records} setId={setId} id={id}/>
        <Records records={medical_records} id={id} />
       
      </div>
    </div>
  );
};

export default App;
