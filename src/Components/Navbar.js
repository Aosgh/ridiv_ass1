import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./Navbar.css";
// import About from "./about";

function Navbar() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link> 
        </li> */}
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        {/* <li>
          <Link to="/">Blogs</Link>
        </li> */}
		<li>
          <button onClick={() => window.history.back()}>Home</button>
        </li>
        <li>
          <button onClick={() => window.history.back()}>Back</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;