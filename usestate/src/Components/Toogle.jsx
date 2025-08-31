import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {isOn && (
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Click on the button to hide this sentence
          </h1>
        )}
        <button
          onClick={() => setIsOn(!isOn)}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 ${
            isOn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isOn ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Toggle;