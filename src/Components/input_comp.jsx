import React from 'react'
const InputComponent = ({ value, onChange, type }) => (

    <div >
        <input type={type}
            value={value} 
            onChange={(event) => onChange(event.target.value)}
        />
    </div>



);

export default InputComponent