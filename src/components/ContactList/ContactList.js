import "./contactList.css";
import userImage from "../../assets/images/user-profile-icon-free-vector.webp";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className="item">
            <div className="list">
              <img src={userImage} alt="User" />
              <div>
                <p>name : {name}</p>
                <p>email : {email}</p>
              </div>
            </div>
            <button onClick={() => onDelete(id)}>delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
