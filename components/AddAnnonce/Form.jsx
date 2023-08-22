import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Annocne</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Type de service
          </span>
            <select 
              id="countries" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={post.typeDeService}
              onChange={(e) => setPost({ ...post, typeDeService: e.target.value })}
              >
              <option selected>Sélectionnez une option</option>
              <option value="offre">Offre</option>
              <option value="demande">Demande</option>
            </select>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Type de metier
          </span>
            <select 
              id="countries" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={post.typeDeMetier}
              onChange={(e) => setPost({ ...post, typeDeMetier: e.target.value })}
              >
              <option selected>Sélectionnez une option</option>
              <option value="developpeur">developpeur</option>
              <option value="graphiste">graphiste</option>
            </select>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>

          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder='Veuillez decrire le sujet de votre annonce'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Disponibilites
          </span>
            <select 
              multiple 
              id="countries_multiple" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={post.disponibilites}
              
              onChange={(e) => setPost({ ...post, disponibilites: e.target.value })}
              >
              <option selected>Sélectionnez une option</option>
              <option value="En semaine">En semaine</option>
              <option value="Les weekends">Les weekends</option>
              <option value="Le matin">Le matin</option>
              <option value="L'apres midi">L'apres midi</option>
              <option value="Le soir">Le soir</option>
            </select>
        </label>
        
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Prix
          </span>
          <input
            value={post.prix}
            onChange={(e) => setPost({ ...post, prix: e.target.value })}
            type='number'
            placeholder='5'
            step={5}
            min={5}
            max={5000}
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;