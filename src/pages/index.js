import React from "react";
import Layout from "../components/Layout";
import Images from "../components/Images";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Gatsby Test" description="Welcome" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-0">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Images nameImage="foto-01" />
                </div>
                <div className="carousel-item">
                  <Images nameImage="foto-02" />
                </div>
                <div className="carousel-item">
                  <Images nameImage="foto-03" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Home</h1>
            <p>Welcome to your new Gatsby site</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
