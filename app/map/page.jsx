import dynamic from 'next/dynamic';
import React from 'react';
import Searchbar from "@components/Marketplace/Searchbar";

const TabCardMap = dynamic(() => import('@components/Map/TabCardMap'), {
  ssr: false,
});


const MapPage = () => {
  return (
    <section className="w-full flex-center flex-col p-4">
      <br></br>
      <Searchbar />
      <br></br>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        <TabCardMap />
      </div>
    </section>
  );
};

export default MapPage;
