import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";

const EditContact = ({ editContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const history = useNavigate();
  const params = useParams();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory");
    }
    e.preventDefault();
    try {
      await updateContact(params.id, contact);
      history("/");
    } catch (error) {}
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

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
      <button type="submit">Edit contact</button>
    </form>
  );
};

export default EditContact;
