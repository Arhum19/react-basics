import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  let toggle = () => {
    setTheme(!theme);
  };
  let style = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <h1>{theme ? "DarkMode" : "LightMode"}</h1>
      <p>This is basic theme changer</p>
      <button onClick={toggle}>
        Switch to {theme ? " light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
