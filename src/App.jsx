import React, {useState} from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";


const title = "Patient Medical Records";


const App = () => {

  //console.log({medical_records})
  const [id, setId] = useState(0);
  const [selectionMade, setSelectionMade] = useState(false);

  return (
     <div className="App">
        <header className="header layout-row align-items-center justify-content-center">
           <div id="title">{title}</div>
        </header>
        <div className="content">
           <Search
              records={medical_records}
              setId={setId}
              id={id}
              selectionMade={selectionMade}
              setSelectionMade={setSelectionMade}
           />
           <Records
              records={medical_records}
              setId={setId}
              id={id}
              selectionMade={selectionMade}
           />
        </div>
     </div>
  );
};

export default App;
