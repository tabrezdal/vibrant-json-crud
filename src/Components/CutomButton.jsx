import React from "react";


const CutomButton = (props) => {
  const { BGcolor, color, width, text, onClick } = props;

  return (
    <button
      className="btn"
      style={{
        backgroundColor: BGcolor,
        color: color,
        padding: "10px 15px",
        margin: 10,
        borderRadius: 8,
        float: "right",
        width: width,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


CutomButton.defaultProps = {
  BGcolor: "black",
  color: "white",
  width: 'auto',
  onClick : null
};

export default CutomButton;
