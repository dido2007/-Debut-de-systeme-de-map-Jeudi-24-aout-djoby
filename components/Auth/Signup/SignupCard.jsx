'use client'
import Cards from '@components/Card/Cards';
import { useState } from 'react';
import { sendVerificationCode } from '@hooks/Auth/signup';
import { useRouter } from 'next/navigation';

function SignupCard(props) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleVerificationCode = async () => {

        console.log("Numero de telephone obtenu a travers la signup card : " + phoneNumber);
    
        const response = await sendVerificationCode(phoneNumber);
        const success = response.success
        const fallback = response.fallback
        
        alert(fallback)
        if (success) {
            console.log("Valeur data de Signup card : " + data)
            console.log("Value of which page on signup card : " + data.whichpage)
            props.buttonClick(data);
        } else {
          console.error("Invalid phone number.");
        }
    };

    const data = {
        cardtype: 2,
        whichpage: 'signup',
        phone: phoneNumber,
    }

    const navigateToHaveAccount = () => {
        router.push("/auth/signup")
    };

    return (
        <Cards title="Creer un compte" text="" textbutton="Creer un compte" buttonvalue={handleVerificationCode}>
            <div>
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
                    Vous avez un compte ? <a onClick={() => navigateToHaveAccount()} className="text-blue-700 hover:underline dark:text-blue-500">Connectez-vous</a>
                </div>
            </div>
        </Cards>
    );
    
}

export default SignupCard;