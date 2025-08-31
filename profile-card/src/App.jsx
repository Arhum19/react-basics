import Comp from "./Components"

let App = ()=>{
  return(
    <div>
  <Comp name= {"Arhum"} age ={20} fav={["Javascript", "Python", "React", "C++"]} bio={"A passionate developer and a work holic person"} hobbies={["Coding", "Reading", "Gaming"]} />
  <Comp name= {"Bassam"} age ={20} fav={["python", "ruby", "React", "C++"]} bio={"A passionate developer and a smartest person i know"} hobbies={["Coding", "Reading", "Gaming"]} />
   </div>  
  );
}
export default App;