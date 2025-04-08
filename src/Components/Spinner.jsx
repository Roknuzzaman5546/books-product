import React from "react";


const Spinner = () => {
  return (
    <div className=" text-center flex flex-col justify-center items-center">
      <div className=" text-center my-14">
        <div className="w-20 h-20  border-l-2 border-blue-600 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-blue-200 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>
      </div>
    </div>
  );
};

export default Spinner; 
