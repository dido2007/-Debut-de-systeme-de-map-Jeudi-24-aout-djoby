'use client'

import dynamic from 'next/dynamic';
import React, {useState} from 'react';
import Searchbar from "@components/Map/Searchbar";


const TabCardMap = dynamic(() => import('@components/Map/TabCardMap'), {
  ssr: false,
});


const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
    <section className="w-full flex-center flex-col p-4">
      <br></br>
      <Searchbar onSearch={handleSearch} />
      <br></br>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        <TabCardMap searchTerm={searchTerm} />
      </div>
    </section>
  );
};

export default MapPage;
