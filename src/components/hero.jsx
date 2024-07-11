import video1 from "./../assets/video1.mp4";
import video2 from "./../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Build virtualR tool
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {""} for <br /> developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {" "}
        Exercitation quis amet pariatur excepteur sunt id id amet eiusmod aute
        velit incididunt enim nisi. Magna consequat excepteur proident esse
        aliqua et id. Voluptate dolore adipisicing
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          {" "}
          start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          {" "}
          documentation
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          src={video1}
          autoPlay
          loop
          muted
        ></video>
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          src={video2}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hero;
