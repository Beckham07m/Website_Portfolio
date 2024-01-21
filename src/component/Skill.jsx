import { techs } from "./Data/DataSkill";

const Skill = () => {
  console.log(techs);

  return (
    <div
      name="Skill"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Skill
          </p>
          <p className="text-xl py-6">exp</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-2  gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="mx-auto w-12 sm:w-16"/>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
