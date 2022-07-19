import React, { useState } from "react";
import CutomButton from "./CutomButton";
import { Navigate, useNavigate } from "react-router"; 
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ title }) => {

  const navigate = useNavigate();

  const [showAdd, setShowAdd] = useState(false);
  // const [showAdd, setShowAdd] = useState(false);
  
  const onAdd = (e) => {
    console.log(e);
    navigate('/add') 
  };


  return (
    <header className="header">
      <h1>{title}</h1>
      <CutomButton
        BGcolor={showAdd ? "white" : "black" }
        color={showAdd ? "red" : "green"}
        text={showAdd ? <CloseIcon /> : <AddIcon />}
        onClick={onAdd}
      />
    </header>
  );
};

const HeaderStyle = {
  color: "Grey",
  backgroundColor: "black",
};
Header.defaultProps = {
  title: "Some text",
};
export default Header;
