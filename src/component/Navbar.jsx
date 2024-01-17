import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navData = () => [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skill",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
      <div>
        <h1 className="text-4xl font-bold font-Marcellus ml-2">HELLO</h1>
      </div>

      <ul className="hidden md:flex">
        {navData().map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-2xl text-sky-400 hover:scale-105 duration-200 "
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navData().map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200 "
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
