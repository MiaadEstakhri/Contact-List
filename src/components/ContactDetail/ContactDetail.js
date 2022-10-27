import { Link, useLocation } from "react-router-dom";
import "./contactDetail.css";

const ContactDetail = () => {
  let location = useLocation();
  const { contact } = location.state;

  return (
    <section className="detailWrapper">
      <div className="contactDetail">
        <p>user name is : {contact.name}</p>
        <p>user email is : {contact.email}</p>
        <Link to="/">go to contact list</Link>
      </div>
    </section>
  );
};

export default ContactDetail;
