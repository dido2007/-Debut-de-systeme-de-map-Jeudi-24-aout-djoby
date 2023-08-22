import Image from "next/image";

const AnnoncesDemandesCard = () => {

  const users = [
  {
    fullName: 'Hedi Fourati',
    avatar: '/assets/1.png',
    distance: '6km',
    rating: 4.5
  },
  {
    fullName: 'Mathis Albam',
    avatar: '/assets/2.png',
    distance: '10km',
    rating: 3.5
  },
  {
    fullName: 'Elyes Lakhoua',
    avatar: '/assets/3.png',
    distance: '30km',
    rating: 1.5
  },
  {
    fullName: 'Rayan Daou',
    avatar: '/assets/4.png',
    distance: '20km',
    rating: 5
  },
  {
    fullName: 'Ethan Debrion',
    avatar: '/assets/5.png',
    distance: '10km',
    rating: 4
  },
  {
    fullName: 'Econ Mercier',
    avatar: '/assets/6.png',
    distance: '8km',
    rating: 2
  },
  {
    fullName: 'Chaima Daou',
    avatar: '/assets/7.png',
    distance: '7km',
    rating: 1
  },
  {
    fullName: 'Maria Bernard',
    avatar: '/assets/8.png',
    distance: '25km',
    rating: 4
  },
  {
    fullName: 'Stephanie Carmen',
    avatar: '/assets/9.png',
    distance: '10km',
    rating: 5
  },
  {
    fullName: 'Dalia Zebi',
    avatar: '/assets/10.png',
    distance: '3km',
    rating: 3
  },
  ]

  const annonces = [
    {
      typeDeService: 'Demandes',
      typeDeMetier: 'Developpeur',
      price: "450dt",
      ImageMetier: '/assets/images/metiers/freelance-developpeur.png'
    },
    {
      typeDeService: 'Demandes',
      typeDeMetier: 'Graphiste',
      price: "150dt",
      ImageMetier: '/assets/images/metiers/freelance-graphiste.png'
    },
    {
      typeDeService: 'Demandes',
      typeDeMetier: 'Formation Scolaire',
      price: "50dt",
      ImageMetier: '/assets/images/metiers/formation-scolaire.png'
    },
    {
      typeDeService: 'Demandes',
      typeDeMetier: 'Electricien',
      price: "Discuter du prix",
      ImageMetier: '/assets/images/metiers/technicien-electricien.png'
    },
    {
      typeDeService: 'Demandes',
      typeDeMetier: 'Menuisier',
      price: "1050dt",
      ImageMetier: '/assets/images/metiers/technicien-menuisier.png'
    }
  ]

  const user = users[Math.floor(Math.random() * users.length)];
  const annonce = annonces[Math.floor(Math.random() * annonces.length)];
  const rating = user.rating;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <svg
          key={i}
          fill="#FFD700"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFD700"
        >
          <path d="M16 1.332l1.723 5.313h5.572l-4.498 3.269 1.722 5.313-4.497-3.27-4.498 3.27 1.723-5.313-4.498-3.27h5.573l1.723-5.313z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          fill="#FFD700"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFD700"
        >
          <path d="M16 0.645l1.059 3.274h3.442l-2.777 2.017 1.059 3.274-2.778-2.018-2.778 2.018 1.059-3.274-2.778-2.017h3.442l1.059-3.274z" />
        </svg>
      );
    }

    for (let i = fullStars + (hasHalfStar ? 1 : 0) + 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          fill="#CCCCCC"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#CCCCCC"
        >
          <path d="M16 1.332l1.723 5.313h5.572l-4.498 3.269 1.722 5.313-4.497-3.27-4.498 3.27 1.723-5.313-4.498-3.27h5.573l1.723-5.313z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex justify-center items-center">
    <div className="flex flex-col items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <div className="flex items-center">
        <p className="rounded-full bg-gray-900 text-white  px-2 py-1 ">{user.distance}</p>
        <div className="flex items-center border rounded-full px-3 py-1">
            <div className="rounded-full bg-gray-800 ml-3">
            <Image className="w-8 h-8 rounded-full" src={user.avatar} width="5" height="5" alt="user photo" />
            </div>
            <div className="ml-3">
            <h1 className="font-bold">{user.fullName}</h1>
            </div>
        </div>
        </div>
            <div className="flex items-center mt-2 mb-5">
                {renderStars()}
            </div>
        <div>
            <Image className="p-8 rounded-t-lg" src={annonce.ImageMetier} width="300" height="300" alt="product image" />
        </div>

        <div className="px-5 pb-5">
        <div className="flex justify-between items-center text-xl font-semibold text-gray-900 dark:text-white pt-3 mt-5">
            <div className="border rounded-full px-3 py-1">{annonce.typeDeService}</div>|
            <div className="border rounded-full px-3 py-1">{annonce.typeDeMetier}</div>
        </div>
        <br/>
        <hr /> 
        <div className="flex justify-center mt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{annonce.price}</span>
        </div>
        </div>
    </div>
    </div>
  );
};

export default AnnoncesDemandesCard;