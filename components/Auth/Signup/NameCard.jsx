'use client'
import Cards from '@components/Card/Cards';
import { useState } from 'react';

function NameCard(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    console.log("Your interests " + interestedServices);
    console.log("Your skills " + skills);
    console.log("Your user type " + userType);
    console.log("Your project images " + projectImages);
    const newValue = e.target.value.replace(/[^a-zA-Z\s]/g, ''); 
    setFirstName(newValue);
  };

  const handleLastNameChange = (e) => {
    const newValue = e.target.value.replace(/[^a-zA-Z\s]/g, ''); 
    setLastName(newValue);
  };

  const navigateToContinue = () => {
    if(firstName == '' || lastName == ''){
      console.log("Remplissez les champs");
    }else{
      console.log("Ton nom est : " + lastName + " et ton prenom est " + firstName);
      props.buttonClick(data);
    }

  };

  const fullname = firstName + " " + lastName


  const data = {
    phone: props.data.phone,
    fullname: fullname,
    cardtype: 4,
  }


  return (
    <Cards title="Entrez votre nom et prénom" text="" textbutton="Valider" buttonvalue={navigateToContinue}>
      <Form className="auth-card-form">
        <Form.Group className="mb-3 col-md-8 offset-md-2 underlined-form-group" controlId="formBasicFirstName">
          <Form.Label className="underlined-label"> | </Form.Label>
          <Form.Control
            type="text"
            className="underlined-input"
            placeholder="Entrez votre prénom"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-8 offset-md-2 underlined-form-group" controlId="formBasicLastName">
          <Form.Label className="underlined-label"> | </Form.Label>
          <Form.Control
            type="text"
            className="underlined-input"
            placeholder="Entrez votre nom"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Form.Group>
      </Form>
    </Cards>
  );
}

export default NameCard;
