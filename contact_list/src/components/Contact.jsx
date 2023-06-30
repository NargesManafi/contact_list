import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="contact">
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default Contact;
