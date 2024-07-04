import React from "react";
import { Link } from "react-router-dom";


export const ContactCard = () => {
    return (
        <div className="border container d-flex">
            <img src="https://picsum.photos/200" alt="" />
            <div>
                <h2>Nombre</h2>
                <p className="lead">Ubicacion</p>
                <p className="lead">Phone</p>
                <p className="lead">Mail</p>
            </div>
            <button>Delete</button>
            <Link to="/addcontact">
                <button className="btn btn-primary">Edit</button>
            </Link>
        </div>
    )
}