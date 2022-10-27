import "./contactList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import getContacts from "../../services/getContacts";
import deleteContact from "../../services/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((e) => e.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log("error...");
    }
  };

  const searchHandler = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    if (search !== "") {
      const filteredContacts = contacts.filter((c) => {
        return Object.values(c)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        <div>
          <input type="text" value={searchTerm} onChange={searchHandler} />
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                onDelete={deleteContactHandler}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
