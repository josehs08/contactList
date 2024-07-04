import React from "react";
import { ContactCard } from "../component/ContactCard.jsx"
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div className="container-fluid p-3 d-flex flex-column">
            <Link to="/addcontact">
                <button className="btn btn-success">Add Contact</button>
            </Link>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
    );
}