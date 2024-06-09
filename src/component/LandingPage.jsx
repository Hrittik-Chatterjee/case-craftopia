import { SiTicktick } from "react-icons/si";

const LandingPage = () => {
  return (
    <div className="flex ">
      <div className=" w-1/2 mt-8">
        <h1 className=" text-6xl font-bold">
          Crafting Custom Cases with{" "}
          <span className="bg-slate-600 text-white  text-4xl mx-3 my-2 px-3">
            Excellence
          </span>
        </h1>
        <p className="mt-4 font-semibold">
          Case Craftopia is your premier destination for high-quality custom
          phone cases. Our dedication to superior craftsmanship and customer
          satisfaction sets us apart in the industry.
        </p>
        <ul className="mt-8">
          <li className="flex text-lg">
            <span className=" mt-2 mr-2">
              <SiTicktick />
            </span>
            Superior Craftsmanship
          </li>
          <li className="flex text-lg">
            <span className=" mt-2 mr-2">
              <SiTicktick />
            </span>
            Premium Materials
          </li>
          <li className="flex text-lg">
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
