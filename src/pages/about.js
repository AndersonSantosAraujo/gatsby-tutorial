import React from "react";
import Layout from "../components/Layout";

import CardV2 from "../components/CardV2";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout>
      <Seo title="About Gatsby" lang="es" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              corrupti beatae enim aspernatur voluptates sint soluta neque
              assumenda placeat magnam distinctio illum quaerat dolorem,
              repudiandae dolorum maxime unde doloribus labore.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <CardV2
              nameImage="foto-01"
              titleCard="Title 1"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quidem officiis laboriosam ratione deserunt aliquam alias!"
              colorButton="gatsby"
              backgroundCard="#e3a617"
              styleDefault={true}
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardV2
              nameImage="foto-02"
              titleCard="Title 2"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quidem officiis laboriosam ratione deserunt aliquam alias!"
              colorButton="warning"
              backgroundCard=""
              styleDefault={false}
            />
          </div>
          <div className="col-lg-4 mb-3">
            <CardV2
              nameImage="foto-03"
              titleCard="Title 3"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quidem officiis laboriosam ratione deserunt aliquam alias!"
              colorButton="gatsby"
              backgroundCard="#e3a617"
              styleDefault={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
