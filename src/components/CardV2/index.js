import React from "react";
import * as Styled from "./styled";
import Images from "../Images";

const CardV2 = (props) => {
  return (
    <Styled.CardV2Wrapper
      className="card"
      background={props.backgroundCard}
      primary={props.styleDefault}
    >
      <Images nameImage={props.nameImage} />
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
        <button className={`btn btn-${props.colorButton}`}>Visitar</button>
      </div>
    </Styled.CardV2Wrapper>
  );
};

export default CardV2;
