import React from "react";
import Review from "./Review";
import { FiGithub } from "react-icons/fi";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <FiGithub className="icon" />
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
