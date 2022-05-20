import React from "react";
import Layout from "../components/Layout";

import * as Styled from "../styles/pages/contactStyles";
import Seo from "../components/seo";

const Contact = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, corrupti beatae enim aspernatur voluptates sint soluta neque assumenda placeat magnam distinctio illum quaerat dolorem, repudiandae dolorum maxime unde doloribus labore.";
  return (
    <Layout>
      <Seo title="Contact Gatsby" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4 mb-3">
            <h1>Contact</h1>
            <p>{text}</p>
          </div>
          <div className="col-md-6 mb-3">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-gatsby text-white">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <Styled.EmailWrapper color="#9c69ac" width="35px" />
                my-email@gmail.com
              </li>

              <li className="list-group-item">
                <Styled.PhoneWrapper color="#9c69ac" width="35px" />
                (00) 9 8765-6521
              </li>

              <li className="list-group-item">
                <Styled.LocationWrapper color="#9c69ac" width="35px" />
                27 Street, 900, NY
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
