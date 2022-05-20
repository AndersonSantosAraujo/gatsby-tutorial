import React from "react";

import * as cardStyles from "./card.module.scss";

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h1>Title Card</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, corrupti
        beatae enim aspernatur voluptates sint soluta neque assumenda placeat
        magnam distinctio illum quaerat dolorem, repudiandae dolorum maxime unde
        doloribus labore.
      </p>
      <button>Button Card</button>
    </div>
  );
};

export default Card;
