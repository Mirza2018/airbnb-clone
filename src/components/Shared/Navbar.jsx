
import { FaAirbnb, FaBars} from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { IoPersonCircleSharp } from "react-icons/io5";
import Search from './Search';

const Navbar = () => {



  return (
        // Navbar items Section
  <nav className="mx-10  fixed z-50 w-full bg-white top-0 pb-10 px-20 pt-5">
    <section className="flex justify-between ">
      {/* logo */}
        <div className=" md:block hidden">
      <div className="text-4xl flex gap-1 justify-center items-center text-rose-600 hover:text-black ">
              <FaAirbnb />
      <h1 className="font-semibold xl:block hidden">airbnb</h1>
      </div>
        </div>
  

{/* Middle component */}
<div className="mx-auto">
      <div className="text-xl gap-7 flex ">
        <button className="font-semibold">stays</button>
        <button className="text-gray-500 text-base">Experiences</button>
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
    <div className='pt-6'>
    <Search/>

    </div>
  </nav>

  );
};

export default Navbar;


