import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);

    // const newAdd = {
    //   id: Math.ceil(Math.random() * 100),
    //   name: contact.name,
    //   email: contact.email,
    // };
    // setContacts([...contacts, newAdd]);
  };

  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((e) => e.id !== id);
    setContacts(filteredContacts);
  };
  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </main>
  );
}

export default App;
