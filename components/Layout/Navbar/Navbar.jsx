"use client";
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LuMapPin } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineUser, } from "react-icons/ai";

function Navbar() {
  const isUserLoggedIn = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [ providers, setProviders ] = useState(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
    setProviders();
  }, []);
  
  return (
    <>
          <div>
            <div className="sm:flex hidden">
              <div className="bg-white dark:bg-blue-700 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
                <div className="mx-auto max-w-screen-xl">
                  <div className="flex justify-between items-center p-3">
                  <div className="flex items-center space-x-12">
                      <ul className="flex gap-7" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li>
                          <Link href="/map" className="h-16 mr-3 flex items-center">
                            <LuMapPin className="object-contain" />
                          </Link>
                        </li>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                          <Link href="/chat" className="h-16 mr-3 flex items-center">
                            <FiMessageSquare className="object-contain" />
                          </Link>
                        </li>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                          <Link href="/" className="h-16 mr-3 flex items-center">
                            <AiOutlineNotification />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <Link href="/" className="flex flex-col p-1">
                        <h1 className="text-center text-3xl font-semibold text-gray-800 dark:text-white">
                          Djoby
                        </h1>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-4 mr-4">
                      {isUserLoggedIn ? (
                        <>
                          <Link href="/">
                            <button 
                                type="button" 
                                className="bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center"
                                style={{ color: '#218AC6' }}>
                                Ajouter une annonce
                            </button>
                          </Link>
                          <div className="relative">
                            <button
                                type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded={isDropdownOpen}
                                onClick={toggleDropdown}
                              >
                                <span className="sr-only">Open user menu</span>
                                <Image
                                  className="w-8 h-8 rounded-full"
                                  src="/assetd/images/123.png"
                                  width={8}
                                  height={8}
                                  alt="user photo"
                                />
                              </button>
                              <div
                                className={`absolute right-0 mt-10 w-40 ${
                                  isDropdownOpen ? "block" : "hidden"
                                } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                                id="user-dropdown"
                              >
                              <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                              </div>
                              <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                              </ul>
                              </div>
                          </div>
                        </>
                      ) : (
                        <Link href="/auth" className="flex items-center">
                          <AiOutlineUser />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
                <div className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
                  <div className="mx-auto max-w-screen-xl">
                    <div className="flex justify-between items-center p-5">
                      <div className="flex items-center space-x-4 left-0">
                        <Link href="/map" className="flex items-center" onClick={() => updateExpanded(false)}>
                          <LuMapPin />
                        </Link> 
                      </div>
                      <div className="flex flex-col items-center">
                        <Link href="/" className="flex flex-col p-1">
                          <h1 className="text-center text-3xl font-semibold text-gray-800 dark:text-white">
                            Djoby
                          </h1>
                        </Link>
                      </div>
                      <div className="flex items-center space-x-4 mr-4">
                        {isUserLoggedIn ? (
                          <>
                            <Link href="/">
                              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                +
                              </button>
                            </Link>
                            <div className="relative">
                              <button
                                type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded={isDropdownOpen}
                                onClick={toggleDropdown}
                              >
                                <span className="sr-only">Open user menu</span>
                                <Image
                                  className="w-8 h-8 rounded-full"
                                  src="/assetd/images/123.png"
                                  width={8}
                                  height={8}
                                  alt="user photo"
                                />
                              </button>
                              <div
                                className={`absolute right-0 mt-10 w-40 ${
                                  isDropdownOpen ? "block" : "hidden"
                                } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                                id="user-dropdown"
                              >
                              <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                              </div>
                              <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                              </ul>
                              </div>
                            </div>
                          </>
                        ) : (
                          <Link href="/auth" className="flex items-center">
                            <AiOutlineUser />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div> 
          <br/><br/><br/><br/>
    </>

  );
}

export default Navbar;
