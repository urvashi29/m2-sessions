import React, { useState } from "react";

const Form = ({ addUser }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    contactError: "",
  });
  const [formValid, setFormValid] = useState(false);
  //   const [disabled, setDisabled] = useState(true);

  const validateName = (name) => {
    let nameError = errorMessage.nameError;
    let isValid = formValid;

    if (name.trim().length < 3) {
      nameError = "Enter name with more than 3 characters!";
      isValid = false;
    } else if (/\d/.test(name.trim())) {
      nameError = "Enter only string characters!";
      isValid = false;
    } else {
      nameError = "";
      isValid = true;
    }

    setFirstName(name.trim());
    setErrorMessage({ ...errorMessage, nameError });
    return isValid;
  };

  const validateEmail = (email) => {
    let pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let emailError = errorMessage.emailError;
    let isValid = formValid;

    if (!pattern.test(email)) {
      emailError = "Please enter valid email!";
      isValid = false;
    } else {
      emailError = "";
      isValid = true;
    }

    setEmail(email.trim());
    setErrorMessage({ ...errorMessage, emailError });
    return isValid;
  };

  const validateContact = (contact) => {
    let contactError = errorMessage.contactError;
    let isValid = formValid;

    if (contact.trim().length != 10) {
      contactError = "Length should be 10.";
      isValid = false;
    } else {
      isValid = true;
      contactError = "";
    }

    setContact(contact.trim());
    setErrorMessage({ errorMessage, contactError });
    return isValid;
  };

  const handleChange = (e) => {
    //e is event object, created automatically
    console.log(e.target); //return the element from which event is fired
    console.log(e.target.id);
    console.log(e.target.value);

    if (e.target.id == "firstName") {
      validateName(e.target.value);
    } else if (e.target.id == "email") {
      validateEmail(e.target.value);
    } else if (e.target.id == "contact") {
      validateContact(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateName(firstName) &&
      validateEmail(email) &&
      validateContact(contact)
    ) {
      const user = { firstName, email, contact };
      addUser(user);

      setFirstName("");
      setEmail("");
      setContact("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">FirstName</label>
        <input
          type="text"
          placeholder="Please enter name"
          id="firstName"
          name="first"
          onChange={handleChange}
          value={firstName}
        />
        <p style={{ color: "red" }}>{errorMessage.nameError}</p>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Please enter email"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <p style={{ color: "red" }}>{errorMessage.emailError}</p>

        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Please enter contact"
          id="contact"
          name="contact"
          onChange={handleChange}
          value={contact}
        />
        <p style={{ color: "red" }}>{errorMessage.contactError}</p>

        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
