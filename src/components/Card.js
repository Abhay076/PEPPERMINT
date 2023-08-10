const Card = (props) => {
  const { role, fullName, tech1,tech2,tech3,tech4 }=props;
  return (
    <div className="card" style={{ background: "white" }}>
      <div className="Role">
        <h3>{role}</h3>
        <p>{fullName}</p>
        <hr></hr>
      </div>

      <p>{tech1}</p>
      <p>{tech2}</p>
      <p>{tech3}</p>
      <p>{tech4}</p>
    </div>
  );
};

export default Card;
