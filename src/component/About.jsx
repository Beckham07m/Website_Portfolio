// import Leprechaun from '../assets/pictures/Leprechaun.png'

function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl sm:text-7xl font-bold text-center">
            About
          </p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          hic at aut culpa quam laboriosam eligendi aliquid. Veniam officia, vel
          consequatur quibusdam sunt nulla doloribus, ad delectus accusantium,
          voluptas non omnis quis provident quasi voluptatem? Maiores obcaecati
          unde laboriosam sapiente.
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          natus et repellendus voluptate delectus aspernatur dolorem cumque qui
          perspiciatis laborum?
        </p>
      </div>
    </div>
  );
}

export default About;
