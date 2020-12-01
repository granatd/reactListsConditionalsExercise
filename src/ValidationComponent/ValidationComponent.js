import React from "react";

const MAX_LEN = 6;
const MIN_LEN = 4;

const ValidationComponent = (props) => {
  let msg = null;

  if (props.length > MAX_LEN) {
    msg = <p>The message is too long!</p>;
  } else if (props.length < MIN_LEN) {
    msg = <p>The message is too short!</p>;
  }
  return msg;
};

export default ValidationComponent;
