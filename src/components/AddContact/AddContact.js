import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addContact.css";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const history = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory");
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    history("/");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContact;
