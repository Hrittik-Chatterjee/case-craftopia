import { SiTicktick } from "react-icons/si";

const LandingPage = () => {
  return (
    <div className="md:flex lg:flex ">
      <div className=" lg:w-1/2 md:1/2 w-full mt-8">
        <h1 className=" text-xl font-bold lg:text-6xl md:text-6xl text-center lg:text-left md:text-left">
          Crafting Custom Cases with{" "}
          <span className="bg-slate-600 text-white text-xl  md:text-4xl lg:text-4xl mx-3 my-2 px-3">
            Excellence
          </span>
        </h1>
        <p className="mt-4 lg:font-semibold md:font-semibold text-center md:text-left lg:text-left">
          Case Craftopia is your premier destination for high-quality custom
          phone cases. Our dedication to superior craftsmanship and customer
          satisfaction sets us apart in the industry.
        </p>
        <ul className="mt-8  ">
          <li className="flex md:text-lg lg:text-lg text-md">
            <span className=" mt-2 mr-2">
              <SiTicktick />
            </span>
            Superior Craftsmanship
          </li>
          <li className="flex md:text-lg lg:text-lg text-md">
            <span className=" mt-2 mr-2">
              <SiTicktick />
            </span>
            Premium Materials
          </li>
          <li className="flex md:text-lg lg:text-lg text-md">
            <span className=" mt-2 mr-2">
              <SiTicktick />
            </span>
            Satisfaction Guarantee:
          </li>
        </ul>
      </div>
      <div className="flex">
        <img className="h-[500px] " src="/demo.png" alt="" />
        <img
          className="w-[200px] h-[200px]  -ml-36"
          src="/yourimage.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
