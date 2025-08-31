let app = () => {
  let name = "arhum";
  let age = 25;
  let isstudent = true;
  let names = ["arhum", "abeera", "basssam", "ali"];
  return (
    <div>
      <section>
        <h1>hello {name}</h1> <p>you are {age} years old</p>{" "}
        <p>
          {isstudent ? "you are a brilliant student" : "first become a student"}
        </p>
      </section>
      <section>
        <h2>Name list</h2>
        <ul>
          {names.map((namess, index) => {
            return <li key={index}> {namess} </li>;
          })}
        </ul>
      </section>
    </div>
  );
};
export default app;
