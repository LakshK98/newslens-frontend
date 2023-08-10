import React, { useState, useEffect } from 'react';


function Homepage() {
    const [apiResp, setApiResp] = useState("Loading Api Resp");

    useEffect(() => {

        fetch('http://3.86.218.176:8080/newslens/')
        .then(response => response.text())
        .then(data =>  {
            setApiResp(data);
        })
        .catch(error => console.error(error));        

    });

    return (
        <div >
            <h1>Here lies return from api call</h1>
            <h1>{apiResp}</h1>
        </div>
    );
}

export default Homepage;
