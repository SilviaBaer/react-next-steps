import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;

//children will be whatever stays between opening and closing tags of this component!!
//using children props you can substitute the generic div wrapper tag with a customised one, in this case Card, which will wrap all the other components (children)