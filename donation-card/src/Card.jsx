let Card = ({ title, description }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      maxWidth: "300px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
