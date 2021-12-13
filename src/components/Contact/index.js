import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_form",
        "template_427ymex",
        form.current,
        "user_JBj57MCiRD4r6XvRz1f9B"
      )
      .then(
        (result) => {
          setName("");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setPlaceHolder("Thank you!");
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label id="label-text">Name</label>
        <input
          className="input-bar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="user_name"
        />

        <label id="label-text">Email</label>
        <input
          className="input-bar"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="user_email"
        />

        <label id="label-text">Message</label>
        <textarea
          className="input-bar"
          name="message"
          value={message}
          placeHolder={placeHolder}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" className="input-bar enter-button" />
      </form>
    </div>
  );
};
export default Contact;
