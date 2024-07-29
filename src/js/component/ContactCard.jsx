import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import Swal from 'sweetalert2'


export const ContactCard = ({ contact }) => {

    const { actions } = useContext(Context);

    function handleDelete(id) {
        actions.deleteContact(id);
    }

    return (
        <div className="contact-container border rounded d-flex p-3 m-auto mt-3">
            <img src="https://picsum.photos/300" className="img-fluid rounded-circle me-3 col-2" alt="" />
            <div className="me-auto mb-auto col">
                <h2>
                    {contact.name}
                </h2>

                <div className="d-flex gap-2">
                    📍
                    <p
                        className="lead">
                        {contact.address}
                    </p>
                </div>

                <div className="d-flex gap-2">
                    📱
                    <p
                        className="lead">
                        {contact.phone}
                    </p>
                </div>

                <div className="d-flex gap-2">
                    📧
                    <p className="lead">
                        {contact.email}
                    </p>
                </div>

            </div>
            <div className="d-flex ms-auto mb-auto gap-3">
                <button className="btn btn-primary" onClick={
                    () => Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            handleDelete(contact.id)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                } >
                    🗑️
                </button>
                <Link to={`/edit/${contact.id}`}>
                    <button className="btn btn-primary">
                        🖉
                    </button>
                </Link>
            </div>
        </div>
    )
}