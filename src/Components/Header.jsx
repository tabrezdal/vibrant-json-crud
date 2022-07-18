import React from 'react';
import Button from './Button';
// import '../Styles/Header.css';


const Header = ({ title, onAdd, showAdd }) => {

    const onClick = (e) =>{
        console.log(e);
      }


  return (
    <header className='header'>
    <h1>{title}</h1>
    <Button BGcolor={showAdd ? 'white' : 'black'} color={showAdd ? 'red' : 'white'} text= {showAdd ? 'x' : '+'} onClick={onAdd}/>
    </header> 


  );
};

const HeaderStyle = {
    color:'Grey',
    backgroundColor: 'black'
}
Header.defaultProps = {
    title : 'Some text',
}
export default Header;
