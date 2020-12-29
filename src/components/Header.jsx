import React from "react";

const Header = () => {
  return (
    <section className="header">
      <button name="button" className="header-btn">
        Add
      </button>
      <h1 className="header-title">Todo List</h1>
      <button name="button" className="header-btn main-red-color">
        Clear
      </button>
    </section>
  );
};

export default Header;
