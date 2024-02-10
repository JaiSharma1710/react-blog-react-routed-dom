import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <div id="header">
      <Link to='/' className="heading">My Blog</Link>
      <button className="btn">login</button>
    </div>
  );
}
