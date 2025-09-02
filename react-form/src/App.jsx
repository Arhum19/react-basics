import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Form Demo: </h1>
      <form>
        <label>Name: </label>
        <input type="text"></input>
        <br />
        <button> Submit here:</button>
      </form>
    </div>
  );
}

export default App;
