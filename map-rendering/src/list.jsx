function List() {
  let list = [
    {
      id: 1,
      name: "arhum",
    },
    { id: 2, name: "bassam" },
    { id: 3, name: "wardaa" },
  ];
  return (
    <div>
      <h1>List of Users:</h1>
      <ul>
        {list.map((i) => {
          return <li Key={i.id}> {i.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
