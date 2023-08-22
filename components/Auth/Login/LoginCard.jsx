'use client'
import Cards from '@components/Card/Cards';
import { useState } from 'react';
import { sendVerificationCode } from '@hooks/Auth/login';
import { useRouter } from 'next/navigation';

function LoginCard(props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVerificationCode = async () => {

    console.log("Numero de telephone obtenu a travers la login card : " + phoneNumber);

    const response = await sendVerificationCode(phoneNumber);
    const success = response.success
    const fallback = response.fallback
    alert(fallback)


    let data = {
      cardtype: 2,
      whichpage: 'login',
      phone: phoneNumber,
    };

    if (success) {
      console.log("Valeur data login card : " + data)
      console.log("Value of which page on login card : " + data.whichpage)
      props.buttonClick(data); // Pass the phoneNumber to the next step (VerificationCard)
    } else {
      data = {
        cardtype: 1,
      }
      console.error("Invalid phone number.");
    }
  };  

  const navigateToCreateAccount = () => {
    router.push("/auth/signup")
  };


  return (
    <Cards title="Se connecter" text="" textbutton="Login" buttonvalue={handleVerificationCode}>
      <div>
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
          <input 
            type="text" 
            name="text" 
            id="phone_number" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            placeholder="+21620123456" 
            required 
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Pas de compte? <a onClick={() => navigateToCreateAccount()} className="text-blue-700 hover:underline dark:text-blue-500">Créer en un</a>
      </div>
    </Cards>
  );
}

export default LoginCard;
