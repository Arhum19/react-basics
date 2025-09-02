import React,{useState} from 'react'

function App() {
  const [theme, setTheme] = useState(false)
  let toggle = () =>{
    setTheme(!theme)
  }
  return (
    <div>
      <h1>{theme ? "DarkMode" : "LightMode"}</h1>
    </div>
  )
}

export default App