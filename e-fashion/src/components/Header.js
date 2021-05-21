import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1> A-Z COLLECTIONS </h1>
          <div>A-Z COLLECTIONS</div>
          <div>Exclusive For Mens Garments</div>
          <div>Egmore,Chennai</div>
        </a>
      </div>
      <div>
        <Link to="/order">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </Link>{" "}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
