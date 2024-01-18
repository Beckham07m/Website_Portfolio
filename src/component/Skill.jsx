import React, { useState } from "react";
import html from "../assets/pictures/html.png";
import css from "../assets/pictures/css.png";
import javascript from "../assets/pictures/javascript.png";
import bootstrap from "../assets/pictures/bootstrap.png";
import mui from "../assets/pictures/mui.png";
import react from "../assets/pictures/react.png";
import tailwind from "../assets/pictures/tailwind.png";
import { fend } from "../component/Data/dataskill";
function Skill() {
  const [fends, setFend] = useState(fend);

  const bend = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
  ];

  const framework = [
    {
      id: 1,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: mui,
      title: "Mui",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div name="Skill" className="bg-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 felx flex-col justify-center w-full max-h-100 text-white">
        <div>
          <p className="text-4xl text-center sm:text-7xl font-bold p-2">
            Skill
          </p>
          <p className="py-6 text-center text-2xl border-b-4 border-gray-500">
            Front-End
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {fends.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-screen-lg mx-auto p-4 felx flex-col justify-center w-full text-white">
          <div>
            <p className="py-6 text-center text-2xl border-b-4 border-gray-500">
              Back-End
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {bend.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-screen-lg mx-auto p-4 felx flex-col justify-center w-full h-full text-white">
          <div>
            <p className="py-6 text-center text-2xl border-b-4 border-gray-500">
              Framework
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {framework.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
