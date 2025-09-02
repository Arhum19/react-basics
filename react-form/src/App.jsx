import React, { useState } from "react";

function App() {
  const [inname, insetName] = useState("");
  const [subname, subsetName] = useState("");

  let handle = (e)=> {
    e.preventDefault();
    subsetName(inname);
  }
  return (
    <div>
      <h1>Form Demo: </h1>
      <form onSubmit={handle}> 
        <label>Name: </label>
        <input type="text" value={inname} onChange={(e) => {
          insetName(e.target.value);
        }}></input>
        <br />
        <button type="submit" onClick={(e) => {
        }}> Submit here:</button>
      </form>
      {subname && <h1> Your Name is: {subname}</h1>}
      
    </div>
    
  );
}

export default App;
