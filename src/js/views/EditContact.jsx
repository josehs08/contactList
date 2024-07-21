import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const EditContact = () => {

    let { id } = useParams();
    const { actions, store } = useContext(Context);
    const [contact, setContact] = useState(null);

    function findContact(id) {
        return store.contacts.find((contact) => contact.id == id);
    }

    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }


    function handleSubmit(e) {
        e.preventDefault();
        actions.editContact(contact, id)
    }

    useEffect(() => {
        setContact(findContact(id));
    }, [])


    return (

        <div className="p-5 d-flex flex-column mx-auto col-sm-12 col-md-5">
            {contact ? (
                <>
                    <h1 className="mx-auto">Add Contact</h1>

                    <form className="border rounded mt-3 p-3">

                        <div className="d-flex flex-column mb-3">
                            <label htmlFor="name" className="from-label">Name</label>
                            <input onChange={handleChange} className="from-control" type="text" name="name" id="name" value={contact.name} />
                        </div>

                        <div className="d-flex flex-column mb-3">
                            <label htmlFor="email" className="from-label">Mail</label>
                            <input onChange={handleChange} className="from-control" type="text" name="email" id="edmail" value={contact.email} />
                        </div>

                        <div className="d-flex flex-column mb-3">
                            <label htmlFor="phone" className="from-label">Phone</label>
                            <input onChange={handleChange} className="from-control" type="text" name="phone" id="phone" value={contact.phone} />
                        </div>

                        <div className="d-flex flex-column mb-3">
                            <label htmlFor="address" className="from-label">Address</label>
                            <input onChange={handleChange} className="from-control" type="text" name="address" id="address" value={contact.address} />
                        </div>

                        <button className="btn btn-primary col-12" type="submit" onClick={handleSubmit}> Save </button>

                    </form>
                </>
            ) : (
                <p>Contact loading</p>)}
            <Link to="/" className="me-auto mt-3">
                <button className="btn btn-primary">Go to home</button>
            </Link>

        </div>
    )
}