'use client'
import { useState } from 'react';
import Cards from '@components/Card/Cards';
import { verifyVerificationCode } from '@hooks/Auth/verification';
import { useRouter } from 'next/navigation';

function VerificationCard(props) {
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  const handleVerificationCodeChange = (event) => {
    const code = event.target.value;
    if (/^[0-9]{0,6}$/.test(code)) {
      setVerificationCode(code);
    }
  };

  const handleVerification = async () => {
    const response = await verifyVerificationCode(props.phoneNumber, verificationCode);
    const success = response.success;

    if (success) {
      const data = {
        whichpage: props.data.whichpage,
        phone: props.data.phone,
        cardtype: props.data.whichpage === 'signup' ? 3 : 8,
     };
      props.buttonClick(data);
    } else {
      console.log('Le code de verification est faux');
      alert(response.fallback);
    }
  };

  const navigateToHaveAccount = () => {
    router.push("/auth/login")
  };

  return (
    <Cards title="Code de Verification" textbutton="Continuer" buttonvalue={handleVerification}>
      <div className="h-screen bg-blue-500 py-20 px-3">
        <div className="container mx-auto">
          <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
              <div className="bg-white h-64 py-3 rounded text-center">
                <div className="flex flex-col mt-4">
                  <span>Veuillez entrer le code de verficiation envoye au </span>
                  <span className="font-bold">{props.data.phone}</span>
                </div>
                  <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <input
                        key={index}
                        className="m-2 border h-10 w-10 text-center form-control rounded"
                        type="text"
                        id={`digit-${index}`}
                        maxLength="1"
                        value={verificationCode[index - 1] || ''}
                        onChange={handleVerificationCodeChange}
                      />
                    ))}
                  </div>

                  <div className="flex justify-center text-center mt-5">
                  {/* <button className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                    <span className="font-bold">Resend OTP</span>
                    <i className="bx bx-caret-right ml-1"></i>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Mauvais numéro ? <a onClick={() => navigateToHaveAccount()} className="text-blue-700 hover:underline dark:text-blue-500">Retourner en arrière</a>
      </div>
    </Cards>
  );
}

export default VerificationCard;
