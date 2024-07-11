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
    </div>
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //   <div className="relative">
    //     <video
    //       className="w-full h-full object-cover"
    //       src={video1}
    //       autoPlay
    //       loop
    //       muted
    //     ></video>
    //     <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/0 to-neutral-900/100 flex items-center justify-center">
    //       <div className="text-center">
    //         <h1 className="text-4xl md:text-6xl text-white font-bold">
    //           Virtual Sam
    //         </h1>
    //         <p className="text-white text-lg md:text-xl">
    //           Your personal assistant
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative">
    //     <video
    //       className="w-full h-full object-cover"
    //       src={video2}
    //       autoPlay
    //       loop
    //       muted
    //     ></video>
    //     <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/0 to-neutral-900/100 flex items-center justify-center">
    //       <div className="text-center">
    //         <h1 className="text-4xl md:text-6xl text-white font-bold">
    //           Virtual Sam
    //         </h1>
    //         <p className="text-white text-lg md:text-xl">
    //           Your personal assistant
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
