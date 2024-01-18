import MyProject from "../assets/pictures/MyProject.jpg";

function Project() {
  const MyProj = [
    {
      id: 1,
      src: MyProject,
    },
    {
      id: 2,
      src: MyProject,
    },
    {
      id: 3,
      src: MyProject,
    },
  ];

  return (
    <div
      name="Project"
      className="bg-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl sm:text-7xl font-bold text-center">Project</p>
          <p className="py-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatem velit distinctio necessitatibus laudantium libero quas
            possimus sequi quisquam nostrum ut facilis magni magnam tempora
            doloremque iure ipsam repellat unde, nemo repudiandae, rerum et
            explicabo eos? Nisi ut nobis quaerat, earum eaque omnis suscipit
            eius est in doloremque maiores libero?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {MyProj.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* <div className="flex items-center justify-center">
                <button className="w-1/2 px-4 py-4 m-4 duration-200 hover:scale-105">
                  click me
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;