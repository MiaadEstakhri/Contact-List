import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user-profile-icon-free-vector.webp";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div key={id} className="item">
      <div className="list">
        <img src={userImage} alt="User" />
        <Link to={`user/${id}`} state={{ contact: contact }}>
          <div>
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button onClick={()=>onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
