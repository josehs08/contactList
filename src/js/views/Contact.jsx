import React, { useState, useContext, useEffect } from "react";
import { ContactCard } from "../component/ContactCard.jsx"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Contact = () => {

    const { store } = useContext(Context);
    const [contactList, setContactList] = useState([]);

    function updateContacts() {
        setContactList(store.contacts);
    }

    useEffect(() => {
        updateContacts();
    })

    if (contactList.length === 0) {
        return (
            <>
                <h1>No contacts found</h1>
                <Link to="/addcontact">
                    <button className="btn btn-success">Add Contact</button>
                </Link>
            </>
        );
    }

    return (
        <div className="container-fluid p-3 d-flex flex-column">
            <Link to="/addcontact" className="ms-auto">
                <button className="btn btn-success">Add Contact</button>
            </Link>
            {
                contactList.map((contact) => {
                    return (

                        <div>
                            <ContactCard key={contact.id} contact={contact} />
                        </div>
                    )
                })

            }
        </div>
    );
}