import "./App.css";

import React, { useState } from "react";

import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = () => {
    const newContact = {
      id: Date.now(),
      name,
      phone,
      email,
    };
    setContacts([...contacts, newContact]);
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact();
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const contactsToShow = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBox handleSearch={handleSearch} />
      <AddContactForm
        name={name}
        phone={phone}
        email={email}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        handleEmailChange={handleEmailChange}
        handleSubmit={handleSubmit}
      />
     <ContactList contacts={contactsToShow} deleteContact={deleteContact} />
    </div>
  );
}

export default App;