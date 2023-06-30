import Contact from "./Contact";
import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  );
}

export default ContactList;
