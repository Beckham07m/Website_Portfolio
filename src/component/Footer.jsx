import { Link } from "react-scroll";
import { FiMail} from "react-icons/fi";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { navData } from "./Data/DataSkill";

function Footer() {

  const openEmailWindow = () => {
    window.open("mailto:as.atsadayut@gmail.com", "_blank");
  };

  return (
    <div className="pt-20 bg-black">
      <footer className="footer footer-center justify-around p-10 bg-black text-base-content rounded">
        <nav className="grid grid-flow-col text-xl gap-4">
          {navData.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer pt-3 text-xl hover:link duration-200 list-none"
            >
              <Link             
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-row w-56 items-center justify-center space-x-6 cursor-pointer text-3xl">
              <div onClick={ openEmailWindow }>
                <FiMail />
              </div>
              <a
                href="https://www.facebook.com/atsadatuy.khuanhat"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/Beckham07m"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
