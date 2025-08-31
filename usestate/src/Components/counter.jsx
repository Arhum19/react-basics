import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          You clicked this {count} times
        </h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="py-2 px-4 rounded-md bg-blue-500 text-white font-medium transition-colors duration-200 hover:bg-blue-600"
          >
            Tap +1
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="py-2 px-4 rounded-md bg-red-500 text-white font-medium transition-colors duration-200 hover:bg-red-600"
          >
            Tap -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;