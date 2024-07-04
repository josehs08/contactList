import React from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
    return (
        <>
            <h1>Hello world from AddContact</h1>
            <Link to="/">
                <button className="btn btn-primary">Go to home</button>
            </Link>
        </>
    )
}