import React from "react";

const TempNavBar = () => {
  return (
    <div className="bg-gray-500">
      <h3>Temp Nav Bar</h3>
      <div className="flex">
        <a href="/profile" className="text-red-400">
          Profile page
        </a>
      </div>
    </div>
  );
};

export default TempNavBar;
