'use client'
import { useState } from 'react';
import MapDemande from '@components/Map/MapDemande';
import MapOffre from '@components/Map/MapOffre';

function TabCardMap({ searchTerm }) {
  const [activeTab, setActiveTab] = useState('offres');

    return (
      <>
        <div className="max-w-7xl bg-white border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
                Select tab
            </label>
            <select
                id="tabs"
                className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setActiveTab(e.target.value)}
                value={activeTab}
            >
                <option value="offres">Offres</option>
                <option value="demandes">Demandes</option>
            </select>
            </div>
            <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
            >
            <li className="w-full">
                <button
                onClick={() => setActiveTab('offres')}
                id="offres-tab"
                data-tabs-target="#offres"
                type="button"
                role="tab"
                aria-controls="offres"
                aria-selected={activeTab === 'offres'}
                className={`inline-block w-full p-4 rounded-tl-lg ${
                    activeTab === 'offres'
                    ? 'bg-blue-900 border p-4 hover:bg-blue-900 text-white focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'dark:bg-gray-800 dark:hover:bg-gray-700 border hover:text-white p-4 hover:bg-blue-700'
                }`}
                >
                Offres
                </button>
            </li>
            <li className="w-full">
                <button
                onClick={() => setActiveTab('demandes')}
                id="demandes-tab"
                data-tabs-target="#demandes"
                type="button"
                role="tab"
                aria-controls="demandes"
                aria-selected={activeTab === 'demandes'}
                className={`inline-block w-full p-4 ${
                    activeTab === 'demandes'
                    ? 'bg-blue-900 border p-4 hover:bg-blue-900 text-white focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'dark:bg-gray-800 dark:hover:bg-gray-700 border hover:text-white p-4 hover:bg-blue-700'
                }`}
                >
                Demandes
                </button>
            </li>
            </ul>
            <div
             className={`p-4 bg-blue-700 md:p-20 dark:bg-gray-800 ${
               activeTab === 'offres' ? '' : 'hidden'
             }`}
             id="offres"
             role="tabpanel"
             aria-labelledby="offres-tab"
            >
               <MapOffre />
            </div>
            <div
              className={`p-4 bg-blue-700 md:p-20 dark:bg-gray-800 ${
                activeTab === 'demandes' ? '' : 'hidden'
              }`}
              id="demandes"
              role="tabpanel"
              aria-labelledby="demandes-tab"
            >
                <MapDemande searchTerm={searchTerm} />
            </div>
        </div>
      </>
    );
}
  
export default TabCardMap;