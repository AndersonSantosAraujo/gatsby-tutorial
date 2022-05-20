import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const Gallery = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(
        filter: {
          extension: { eq: "jpg" }
          absolutePath: { regex: "/images/" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Gallery Gatsby" lang="pt-br" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Gallery</h1>
          </div>
        </div>
        <div className="row">
          {gallery.nodes.map((image) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-3"
              style={{ height: "170px", overflow: "hidden" }}
              key={image.id}
            >
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt="Gallery"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
