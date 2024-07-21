import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"


const initialState = {
    name: "",
    phone: "",
    email: "",
    address: ""
};

export const AddContact = () => {

    const { actions } = useContext(Context);
    const [contact, setContact] = useState(initialState);

    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }


    function handleSubmit(e) {
        e.preventDefault();
        actions.addContact(contact);
        actions.postAgenda(contact);
        setContact(initialState);
    }

    return (

        <div className="p-5 d-flex flex-column mx-auto col-sm-12 col-md-5">

            <h1 className="mx-auto">Add Contact</h1>


            <form className="border rounded mt-3 p-3">

                <div className="d-flex flex-column mb-3">
                    <label htmlFor="name" className="from-label">Name</label>
                    <input onChange={handleChange} className="from-control" type="text" name="name" id="name" value={contact.name} />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label htmlFor="email" className="from-label">Mail</label>
                    <input onChange={handleChange} className="from-control" type="text" name="email" id="email" value={contact.email} />
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

            <Link to="/" className="me-auto mt-3">
                <button className="btn btn-primary">Go to home</button>
            </Link>

        </div>
    )
}