"use client";

import { useState } from "react";
import Link from 'next/link';
import { sendFeedback } from "@hooks/Layout/feedback";
import { LuMapPin } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineNotification } from "react-icons/ai";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);

  const submit = async () => {

    const response = await sendFeedback(data);
    const success = response.success;
    console.log
    if (success) {
      alert("Le feedback a ete envoye avec succes!")
    } else {
      alert("Erreur lors de l'envoie du feedback")
    };
  };

  const data = {
    title: title,
    description: description,
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    <>
          <div>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>
            <div className="sm:flex hidden">
              <footer className="flex flex-col w-full mx-auto sm:px-16 px-6 bg-white dark:bg-gray-900">
                <div className="mx-auto w-full p-4 py-6 lg:py-8">
                  <div className="sm:flex sm:items-center sm:justify-center">
                    <div className="w-full max-w-md mb-6 sm:mb-0 sm:mr-6">
                      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Djoby</h2>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        Djobi est une communauté pour les particuliers ou professionnels cherchant un moyen simple de trouver ou de proposer de la main d’œuvre.
                      </p>
                    </div>
                    <div className="w-full max-w-md">
                      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Feedback</h2>
                      <form>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Entrez le titre de votre feedback"
                            value={title}
                            onChange={handleTitleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <textarea
                            rows="4"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="(ex : Je pense que vous devriez régler le problème suivant...)"
                            value={description}
                            onChange={handleDescriptionChange}
                          />
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          onClick={submit}
                        >
                          Envoyer
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="mx-auto max-w-screen-xl mt-6">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Information</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Equipe</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Assistance</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un animal</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un enfant</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un bébé</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="mx-auto max-w-screen-xl mt-6">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Information</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Equipe</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Assistance</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un animal</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un enfant</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un bébé</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="mx-auto max-w-screen-xl mt-6">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Information</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Equipe</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Assistance</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un animal</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un enfant</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Avec un bébé</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 space-x-5">
                    <a
                      href="#"
                      className="text-black hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      href="#"
                      className="text-black hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-black hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="text-black hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram />
                    </a>
                  </div>
                  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} Djoby. All rights reserved.</span>
                </div>
              </footer>
            </div>
            <div className="sm:hidden flex relative">
                <footer className="fixed bottom-0">
                  <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                          <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                              <Link href="/" className="flex items-center" onClick={() => updateExpanded(false)}>
                                <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <AiOutlineNotification />
                                </svg>
                                <span className="sr-only">Notifications</span>
                              </Link>
                          </button>
                          <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                              Notifications
                              <div className="tooltip-arrow" data-popper-arrow></div>
                          </div>
                          <div className="flex items-center justify-center">
                              <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                  <Link href="/map" className="flex items-center" onClick={() => updateExpanded(false)}>
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <LuMapPin />
                                    </svg>
                                    <span className="sr-only">Maps</span>
                                  </Link>
                              </button>
                          </div>
                          <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                              Maps
                              <div className="tooltip-arrow" data-popper-arrow></div>
                          </div>
                          <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                              <Link href="/chat" className="flex items-center" onClick={() => updateExpanded(false)}>
                                <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <FiMessageSquare />
                                </svg>
                                <span className="sr-only">Messages</span>
                              </Link>
                          </button>
                          <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                              Messages
                              <div className="tooltip-arrow" data-popper-arrow></div>
                          </div>
                      </div>
                  </div>
                </footer>
            </div>
          </div> 
    </>

  );
}

export default Footer;