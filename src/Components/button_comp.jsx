import React from 'react'


const ButtonComponent = ({ type,text,onClick}) => (
    <button type="submit" className="button">{text}</button>
);

export default ButtonComponent