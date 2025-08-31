import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-sm w-full bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        {isOn && (
          <h1 className="text-2xl font-bold text-center text-white mb-6 tracking-tight">
            Click to toggle visibility
          </h1>
        )}
        <button
          onClick={() => setIsOn(!isOn)}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOn
              ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          } shadow-md hover:shadow-lg`}
        >
          {isOn ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Toggle;