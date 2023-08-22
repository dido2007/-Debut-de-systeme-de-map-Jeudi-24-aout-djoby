'use client'
import Cards from '@components/Card/Cards';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MutatingDots } from  'react-loader-spinner'
import { sessionInitialization } from '@hooks/Auth/session';

function SessionInitializationCard(props) {
  const router = useRouter();

  const data = {
    phone: props.data.phone,
  }


  const initializeSessionAndUserData = async () => {
    try {
      const response = await sessionInitialization(data.phone, setUser);
      console.log(response.data.fullName)
      const fallback = response.fallback
      alert(fallback);
      router.push('/marketplace');
      return response.data
    } catch (error) {
      console.error('Error performing the session: ', error);
    }
  };
  
  useEffect(() => {
      initializeSessionAndUserData();
  });

  return (
    <Cards title="Session Initialization">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <MutatingDots 
          height={100}
          width={100}
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius={12.5}
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </Cards>
  );
}

export default SessionInitializationCard;

