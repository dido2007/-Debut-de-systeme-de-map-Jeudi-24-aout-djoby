import Image from "next/image";

const AnnoncesOffresCard = () => {

  const user = {
    fullName: 'Hedi Fourati',
    avatar: '/assets/images/avatar.png',
    distance: '6km',
    rating: 4.5
  }

  const annonce = {
    typeDeService: 'Offres',
    typeDeMetier: 'Coach Sportif',
    price: "450dt",
    ImageMetier: '/assets/images/metiers/formation-sportive.png'
  }

  const rating = user.rating;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <svg
          key={`full-star-${i}`}
          className="w-4 h-4 text-yellow-300"
        >
          <use xlinkHref="#star" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className="w-4 h-4 text-yellow-300"
        >
          <use xlinkHref="#star" />
        </svg>
      );
    }

    for (let i = fullStars + (hasHalfStar ? 1 : 0) + 1; i <= 5; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          className="w-4 h-4 text-gray-300 dark:text-gray-500"
        >
          <use xlinkHref="#star" />
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

export default AnnoncesOffresCard;