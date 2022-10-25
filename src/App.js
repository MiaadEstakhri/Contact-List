import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
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

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="App">
      <h1>Contact App</h1>
      <Routes>
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;
