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
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  name="message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
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
