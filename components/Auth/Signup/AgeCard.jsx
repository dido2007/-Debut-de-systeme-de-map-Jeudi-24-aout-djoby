'use client'
import Cards from '@components/Card/Cards';
import { useState } from 'react';

function AgeCard(props) {
  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const navigateToContinue = () => {
    if(age == ''){
      console.log("Remplissez les champs");
    }else{
      console.log("Ton age est : " + age);
      props.buttonClick(data);
    }
  };


  const data = {
    age: age,
    phone: props.data.phone,
    fullname: props.data.fullname,
    cardtype: 5,
  }

  return (
    <Cards title="Quel est votre age" text="Votre age doit se situer entre 18 et 80 ans" textbutton="Valider" buttonvalue={navigateToContinue}>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your age</label>
        <input
            type="number"
            name="age" 
            id="age" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            required
            placeholder="Votre age"
            value={age}
            onChange={handleAgeChange}
            min={18}
            max={80}
          />
      </div>
    </Cards>
  );
}

export default AgeCard;
