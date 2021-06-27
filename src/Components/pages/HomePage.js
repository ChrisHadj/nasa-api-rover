import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavLink to="/perseverance" exact activeClassName="active">
        <p style={{ marginRight: "15px" }}>Latest image from Perseverance</p>
      </NavLink>

      <NavLink to="/curiosity" exact activeClassName="active">
        Latest image from Curiosity
      </NavLink>
    </div>
  );
};

export default HomePage;
