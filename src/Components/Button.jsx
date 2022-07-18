import React from 'react';

const Button = (props) => {

  const { BGcolor, color, text, onClick } = props;
  return (
    <button 
      className="btn" 
      style={{backgroundColor:BGcolor, color: color, padding: '10px 15px', margin: 10, borderRadius: 8, float: 'right'}} 
      onClick={onClick}>{text}
    </button>
  );
};

export default Button;
