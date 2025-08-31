const Comp = ({name,age,fav,hobbies,bio}) => {
 
  let image_url =
    "https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_1280.png";
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome to {name}'s Profile Card!!
        </h1>
        <img
          src={image_url}
          alt={`${name}'s profile picture`}
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-200 object-cover transition-transform duration-300 hover:scale-110"
        />
        <h2 className="text-xl font-semibold mt-6 text-gray-800">Bio:</h2>
        <p className="text-gray-600 mt-2">{bio}</p>
        <h2 className="text-xl font-semibold mt-6 text-gray-800">
          Expertise in Languages:
        </h2>
        <ul className="mt-2 space-y-2">
          {fav.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 bg-blue-50 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100"
            >
              {item}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-6 text-gray-800">Hobbies:</h2>
        <ul className="mt-2 space-y-2">
          {hobbies.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 bg-green-50 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-green-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comp;