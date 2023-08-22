'use client'
import Cards from '@components/Card/Cards';
import { useState } from 'react';
import { finishRegistration } from '@hooks/Auth/signup'

function ProfileInfoCard(props) {

  const [userType, setUserType] = useState('');
  const [interestedServices, setInterestedServices] = useState([]);
  const [skills, setSkills] = useState('');
  const [projectImages, setProjectImages] = useState([]);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);

  };

  const handleInterestedServicesChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setInterestedServices(selectedOptions);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleProjectImagesChange = (event) => {
    setProjectImages(Array.from(event.target.files));
  };


  const navigateToContinue = async () => {
    
    const success = await finishRegistration(data);

    if (success) {
      console.log("Valeur data de toute les cards " + data)
      props.buttonClick(data); // Pass the phoneNumber to the next step (VerificationCard)
    } else {
      console.error("Valeurs mals envoyees a la DB.");
    }
    console.log("Your interests " + interestedServices);
    console.log("Your skills " + skills);
    console.log("Your user type " + userType);
    console.log("Your project images " + projectImages);
    props.buttonClick(data);
  };


  const data = {
    avatar: props.data.avatar,
    interestedservices: interestedServices,
    skills: skills,
    projectimages: projectImages,
    usertype: userType,
    age: props.data.age,
    phone: props.data.phone,
    fullname: props.data.fullname,
    position: props.data.position,
    cardtype: 8,
  }

  return (
    <Cards title="Composez votre profil" text="Terminer l'inscription" textbutton="Valider" buttonvalue={navigateToContinue}>
      <div>
      <br></br>
       <div>
          <div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etes-vous plutôt Offreur ou Demandeur de service ?</label>
            <select 
              id="countries" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={userType}
              onChange={handleUserTypeChange}
              >
              <option selected>Sélectionnez une option</option>
              <option value="offreur">Offreur</option>
              <option value="demandeur">Demandeur</option>
              <option value="offreur+demandeur">Les deux</option>
            </select>
          </div>
          <div>
            <label htmlFor="countries_multiple" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quels sont les services qui vous intéressent le plus ?</label>
            <select 
              multiple 
              id="countries_multiple" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={interestedServices}
              onChange={handleInterestedServicesChange}
              >
              <option selected>Sélectionnez une option</option>
              <option value="technicien">Technicien</option>
              <option value="formateur">Formateur</option>
              <option value="assistance">Assistance</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
        </div>
        <br></br>
        <div>
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mettez en avant vos compétences (Matériels, Diplômes, Anciens projets...)</label>
          <textarea 
            id="message" 
            rows="4" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Write your thoughts here..."
            as="textarea"
            value={skills}
            onChange={handleSkillsChange} 
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avez-vous des images de vos anciens projets matériel ?</label>
          <input 
            id="dropzone-file" 
            type="file" 
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleProjectImagesChange}
          />
        </div>
        <br></br>
      </div>
    </Cards>
  );
}

export default ProfileInfoCard;
