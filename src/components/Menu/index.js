import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-gatsby">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <StaticImage
            src="../../images/icon.png"
            alt="Logo"
            placeholder="blurred"
            layout="fixed"
            width={35}
            height={35}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                activeStyle={{ color: "red" }}
                activeClassName="active"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                activeStyle={{ color: "#542c85" }}
                activeClassName="active"
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                activeStyle={{ color: "#542c85" }}
                activeClassName="active"
                className="nav-link"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                activeStyle={{ color: "#542c85" }}
                activeClassName="active"
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
