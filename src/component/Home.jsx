import { FaArrowCircleRight } from "react-icons/fa";
import Wall from '../assets/pictures/Wall.jpg'
import ResumeFrontEnd from '../assets/pdf/ResumeFrontEnd.pdf'

function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-5">
          <h1 className="text-zinc-50 text-4xl sm:text-7xl font-bold">
            I&apos;m a Front-End Developer
          </h1>
          <p className="text-xl text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            obcaecati id praesentium delectus repudiandae laboriosam quis
            repellendus cupiditate minus at totam alias dolore magnam dolores
            aperiam hic molestiae, distinctio perspiciatis.
          </p>

          <div>
            <a href={ResumeFrontEnd} download="ResumeFrontEnd.pdf">
              <button
                className="group rounded-full btn btn-info btn-outline sm:btn-sm md:btn-md lg:btn-lg"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300 ">
                  <FaArrowCircleRight />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={Wall}
            alt="Wallpaper"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
