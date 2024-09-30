
import { FaAirbnb, FaBars} from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {



  return (
        // Navbar items Section
  <nav className="mx-10 p-4 ">
    <section className="flex justify-between ">
      {/* logo */}
        <div className=" md:block hidden">
      <div className="text-4xl flex gap-1 justify-center items-center text-rose-600 hover:text-black ">
              <FaAirbnb />
      <h1 className="font-semibold">airbnb</h1>
      </div>
        </div>
  

{/* Middle component */}
<div className="mx-auto">
      <div className="text-xl gap-7 flex ">
        <button>stays</button>
        <button>Experiences</button>
      </div>
</div>
{/* Last component */}
<div className=" md:block hidden">
      <div className="flex gap-5 justify-between items-center text-xl">
          <h1>Airbub your home</h1>
          <TfiWorld />
          <div className="flex justify-center items-center gap-4 text-gray-600  ring-1 ring-gray-300 rounded-full px-4 py-2">
            <FaBars/>
            <IoPersonCircleSharp className="text-4xl" />
          </div>
      </div>
 </div>     

    </section>
  </nav>

  );
};

export default Navbar;


