import React from "react";

export default function Card() {
  return (
    <div className="bg-gray-300 rounded-tl-md rounded-tr-md card">
      <div className="text-center mt-8 mb-20 card__content">
        <h3 className="text-purple-600 font-bold ">CATEGORY</h3>
        <p className="font-bold text-lg">Raclette Blueberry Nextious Level</p>
        <p className="text-black text-md font-thin">
          {" "}
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed
          sriracha leggings jianbing microdosing tousled waistcoat.
        </p>
      </div>
      <div className="bg-gray-100 py-4 px-2 flex flex-row justify-between card__bottom">
        <span className="font-bold ">18TC</span>
        <button className="bg-purple-500 text-white p-1.5 rounded-md hover:text-purple-500 hover:bg-gray-200 duration-500 ">
          Resgister
        </button>
      </div>
    </div>
  );
}
