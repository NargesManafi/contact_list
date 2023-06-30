import React from "react";

const AddContactForm = ({
  name,
  phone,
  email,
  handleNameChange,
  handlePhoneChange,
  handleEmailChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactForm;
