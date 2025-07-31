import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setAll }) => {
  const navigate = useNavigate();

  const goldRef = useRef();
  const silverRef = useRef();
  const bronzeRef = useRef();
  const titaniumRef = useRef();
  const platinumRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAll([
      { type: "gold", value: goldRef.current.value },
      { type: "silver", value: silverRef.current.value },
      { type: "bronze", value: bronzeRef.current.value },
      { type: "platinum", value: platinumRef.current.value },
      { type: "titanium", value: titaniumRef.current.value },
    ]);
    navigate("/summary");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="for gold" ref={goldRef} />
        <input type="number" placeholder="for silver" ref={silverRef} />
        <input type="number" placeholder="for bronze" ref={bronzeRef} />
        <input type="number" placeholder="for platinum" ref={platinumRef} />
        <input type="number" placeholder="for titanium" ref={titaniumRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
