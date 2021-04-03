import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => setToggle(!toggle);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={toggler} className="btn">
          {toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
