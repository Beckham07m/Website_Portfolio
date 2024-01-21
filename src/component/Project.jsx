import crud from "../assets/pictures/crud.png";
import WebPort from "../assets/pictures/WebPort.png";

function Project() {
  const MyProj = [
    {
      id: 1,
      src: crud,
      dis: "this is crud",
    },
    {
      id: 2,
      src: WebPort,
      dis: "this is port",
    },
  ];

  return (
    <div
      name="Project"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="text-xl py-6">This is some of the work I did.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {MyProj.map(({ id, src, dis }) => (
            <div
              key={id}
              className="group shadow-md shadow-gray-600 rounded-lg hover:scale-105"
            >
              <img src={src} alt="" className="rounded-md duration-200" />
              <div className="flex item-center justify-center w-full">
                <a href="">
                  <button className="w-full px-6 py-3 duration-200 rounded-md">
                    {dis}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;