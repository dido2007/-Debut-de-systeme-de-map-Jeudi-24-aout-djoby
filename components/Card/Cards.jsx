function Cards(props) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">{props.title}</h5>
            <h6 className="text-xl font-medium text-gray-900 dark:text-white">{props.text}</h6>
              <div>
              {props.children}
              </div>
            <button type="submit" onClick={props.buttonvalue} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.textbutton}</button>
        </form>
    </div>
  );
}

export default Cards;

