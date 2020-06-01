import React, { useState } from 'react'
import InputComponent from './input_comp'
import ButtonComponent from './button_comp'


const CreateURL = () => {
    const [longURL, setLongUrl] = useState("")

    const data = {
        "longURL": longURL
    }
    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:3030/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error("Error: ", error))
            .then(response => console.log("Success: ", JSON.stringify(response)));
    }

    return (
        <div className="shrink">
            <div >
                <form onSubmit={submit}>
                    <div>
                        <label>Paste your Long URL here:</label>
                        <InputComponent name="url" type="text" value={longURL} onChange={(value) => setLongUrl(value)} />
                    </div>
                   
                    <ButtonComponent text="Shrink" />
                </form>
            </div>
        </div>




    )
}

export default CreateURL;