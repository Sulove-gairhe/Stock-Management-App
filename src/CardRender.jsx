import React from "react";


function CardRender({ ModelNo, Stock, Image}) {
  return (
    <div className="relative card bg-cover bg-center shadow-md p-8 rounded-lg text-center m-3" 
         style={{ backgroundImage: `url(${Image})` }}>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content on top of the blur */}
      <div className="relative z-10">
        <img
          src={Image}
          alt="Refrigerator"
          className="w-32 h-32 mx-auto rounded-full"
        />

        <h2 className="text-xl font-bold mt-4 text-white">{ModelNo}</h2>

        <div className="bg-slate-200 p-4 rounded-lg shadow-md flex flex-col items-center">
          {/* SID */}
          <span className="text-2xl font-bold text-gray-800">{Stock}</span>

          {/* Stock */}
          <span className="text-sm text-gray-500 bg-yellow-100 px-2 py-1 rounded mt-2">
            Stock: <span className="font-semibold text-yellow-600">{Stock}</span>
          </span>
        </div>

      </div>
    </div>
  );
}

export default CardRender;
