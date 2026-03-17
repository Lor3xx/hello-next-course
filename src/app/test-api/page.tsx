"use client";
import axios from "axios";
import React from "react";

function TestPage() {

    function doSomething() {
        axios.post('/api/routes', { name: 'test' })
        .then(res => console.log("API response:", res.data))
        .catch(err => console.error("API error:", err));
    }

    return (
        <div className="page">
            <h1>Hello API Routes</h1>
            <button onClick={doSomething}>Call API</button>
        </div>
    )
}

export default TestPage;