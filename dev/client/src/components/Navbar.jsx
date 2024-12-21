"use client";

import { TiHeart } from "react-icons/ti";
import { IoIosGlobe } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { SiHiveBlockchain } from "react-icons/si";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full px-10 pt-7 flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <div>
          <SiHiveBlockchain className="h-[35px] w-[35px]" />
        </div>
        <div
          onClick={() => {
            router.push("/");
          }}
          className="text-center cursor-pointer"
        >
          <h1 className="font-[700] text-[30px]">DecentraVote</h1>
          {/* <h1 className="opacity-50 text-[12px] relative top-[-10px]">
            Transparent Elections
          </h1> */}
        </div>
      </div>

      <div className="flex items-center justify-center gap-[5px] pr-10 text-[17px] font-[600]">
        <h1 className="cursor-pointer px-5 py-2 rounded-md hover:bg-[rgb(15,63,129)] transition duration-200 ease-linear">
          Home
        </h1>
        <h1 className="cursor-pointer px-5 py-2 rounded-md hover:bg-[rgb(15,63,129)] transition">
          Dashboard
        </h1>
        <h1 className="cursor-pointer px-5 py-2 rounded-md hover:bg-[rgb(15,63,129)] transition">
          Vote Casting
        </h1>
        <h1 className="cursor-pointer px-5 py-2 rounded-md hover:bg-[rgb(15,63,129)] transition">
          Results
        </h1>
        <h1 className="cursor-pointer px-5 py-2 rounded-md hover:bg-[rgb(15,63,129)] transition">
          Candidates List
        </h1>
        <h1 className="cursor-pointer px-5 py-2 rounded-md hover:bg-[rgb(15,63,129)] transition">
          Login/Register
        </h1>
      </div>
      {/* <div className="flex items-center justify-center w-[30%]">
        <div className="w-[100%] flex items-center pr-4 border-2 rounded-[10px] text-[15px]">
          <input
            type="text"
            placeholder=""
            className="w-full py-2 px-2 rounded-[10px] mr-4"
          />
          <div className="cursor-pointer">
            <CiSearch size={30} />
          </div>
        </div>
      </div> */}
      {/* <div>
        <div className="flex justify-center gap-7 text-white">
          <div className="flex p-2 rounded-[10px] cursor-pointer">
            <TiHeart size={25} />
          </div>
          <div className="flex p-2 rounded-[10px] cursor-pointer">
            <IoIosGlobe size={25} />
          </div>
          <div
            onClick={() => {
              router.push("/register");
            }}
            className="flex p-2 cursor-pointer rounded-[10px]"
          >
            <FaRegUser size={25} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
