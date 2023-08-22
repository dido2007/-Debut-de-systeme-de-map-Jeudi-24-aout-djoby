'use client'

import { useState } from 'react';
import LoginCard from "@components/Auth/Login/LoginCard";
import SignupCard from "@components/Auth/Signup/SignupCard";
import VerificationCard from "@components/Auth/Verification/VerificationCodeCard";
import AvatarCard from "@components/Auth/Signup/AvatarCard";
import AgeCard from "@components/Auth/Signup/AgeCard";
import LocalisationCard from "@components/Auth/Signup/LocalisationCard";
import NameCard from "@components/Auth/Signup/NameCard";
import ProfileInfoCard from "@components/Auth/Signup/ProfileInfoCard";
import SessionInitializationCard from "@components/Auth/SessionInitialization/SessionInitializationCard";

const Auth = () => {
  const [data, setData] = useState({});
  const [cardType, setCardType] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNavigation = (data) => {
    console.log("App Jsx Data : " + data);
    setData(() => data);
    console.log("App Jsx Data Cardtype : " + data.cardtype);
    setCardType(() => data.cardtype);
    console.log("App Jsx Data Phone : " + data.phone);
    setPhoneNumber(() => data.phone);
  };


  switch (cardType) {
    case 1:
      return (
        <>
        <section className="w-full flex-center flex-col">
          <br></br><br></br><br></br><br></br><br></br><br></br>
          {cardType === 1 && <LoginCard data={data} buttonClick={handleNavigation} />}
        </section>
        </>
      );

    case 2:
      return (
        <>
        <section className="w-full flex-center flex-col">
          <br></br><br></br><br></br><br></br><br></br><br></br>
          {cardType === 2 && <VerificationCard data={data} phoneNumber={phoneNumber} buttonClick={handleNavigation} />}
        </section>
        </>
      );

    case 3:
      return (
        <>
        <section className="w-full flex-center flex-col">
          <br></br><br></br><br></br><br></br><br></br><br></br>
          {cardType === 3 && <SessionInitializationCard data={data} phoneNumber={phoneNumber} buttonClick={handleNavigation}/> }
        </section>
        </>
      );

    default:
      return (
        <>
        <section className="w-full flex-center flex-col">
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <Cards title="There is an error accessing the page">
          </Cards>
        </section>
        </>
      );
  }
}

export default Auth