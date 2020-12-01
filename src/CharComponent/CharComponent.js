import React from "react";

const CharComponent = (props) => {
  // const letter = text[index];
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    text: "center",
  };

  return (
    <div style={style} onClick={props.click}>
      {props.letter}
    </div>
  );
};

export default CharComponent;
