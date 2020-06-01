import React, { useState, useEffect } from 'react'
import InputComponent from './input_comp';

const ShortURL = () => {
    const [shortLink, setShortLink] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3030/view")
            .then((res) => res.json())

            .then((data) => {
                setShortLink(data);
            });
    }, []);

    return (
       

        <div >          
            <table className="mytable">
                <thead>
                    <tr>
                        <th >LongURL</th>
                        <th >ShortURL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shortLink.map((link, index) => (
                            <tr key={index}>
                                <td>{link.longURL}</td>
                                <td><a
                                    href={link.longURL}>http://localhost:3030/{link.shortURL}</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default ShortURL