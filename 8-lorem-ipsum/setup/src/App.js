import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let lastIndex = +count;
    if (lastIndex <= 0) {
      lastIndex = 1;
    }
    if (lastIndex > 8) {
      lastIndex = 8;
    }
    setText(data.slice(0, lastIndex));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
