import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Images = (props) => {
  return (
    <>
      {(() => {
        switch (props.nameImage) {
          case "foto-01":
            return (
              <StaticImage
                src="../../images/foto-01.jpg"
                alt="foto01"
                placeholder="tracedSVG"
              />
            );

          case "foto-02":
            return (
              <StaticImage
                src="../../images/foto-02.jpg"
                alt="foto02"
                placeholder="blurred"
              />
            );

          case "foto-03":
            return (
              <StaticImage
                src="../../images/foto-03.jpg"
                alt="foto03"
                placeholder="dominantColor"
              />
            );

          default:
            return null;
        }
      })()}
    </>
  );
};

export default Images;
