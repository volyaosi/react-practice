import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button
            key={i}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
