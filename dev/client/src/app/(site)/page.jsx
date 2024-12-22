"use client";
import { SiHiveBlockchain } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import { MdHowToVote } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex justify-between items-center overflow-hidden mt-11 h-full w-full px-[110px]">
      <div className="w-full">
        {/* Main Heading of Home Page */}

        <div className="flex justify-center">
          <div className="my-4 gap-5 text-center">
            <h1 className="font-medium text-[40px] mt-5">
              Welcome to DecentraVote
            </h1>
            <p className="px-44 opacity-80">
              The Transparent Elections project introduces a novel framework for
              electoral processes by implementing a decentralized voting
              solution that utilizes blockchain and cloud technologies. This
              approach addresses critical challenges in traditional voting
              methods by ensuring enhanced security, privacy, and transparency
              throughout the election lifecycle.
            </p>
          </div>
        </div>

        {/* Buttons Section */}

        <div className="flex gap-[50px] justify-center">
          <button className="bg-[rgb(4,119,183)] text-white px-3 py-2 rounded-[10px] text-[20px] hover:bg-[rgb(15,63,129)] transition">
            Create Account
          </button>
          <button className="bg-[rgb(4,119,183)] text-white px-3 py-2 rounded-[10px] text-[20px] hover:bg-[rgb(15,63,129)] transition">
            Cast Vote
          </button>
        </div>

        {/* Feature Component */}

        <div className="mt-10 w-full py-2">
          <div className="text-center">
            <h1 className="text-[35px]">What We Provide ?</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              nobis?
            </p>
          </div>

          <div className="grid grid-cols-3 gap-7 px-52 pt-5">
            <div className="border-2 border-slate-400 w-full transition hover:scale-[1.05] hover:bg-[rgba(15,62,129,0.82)] flex items-center justify-center p-5 rounded-md bg-[rgb(15,63,129)]">
              <div>
                <div className="flex justify-center pb-2">
                  <FaEthereum className="h-14 w-14" />
                </div>
                <div className="flex items-center justify-center">
                  <hr className="w-20 my-2 text-center" />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-[500]">Heading Random</h1>
                  <p className="text-sm py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, nisi voluptate ad voluptates totam unde!
                  </p>
                  <a href="" className="font-[600] underline">
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-slate-400 w-full flex items-center transition hover:scale-[1.05] hover:bg-[rgba(15,62,129,0.82)] justify-center p-5 rounded-md bg-[rgb(15,63,129)]">
              <div>
                <div className="flex justify-center pb-2">
                  <SiHiveBlockchain className="h-14 w-14" />
                </div>
                <div className="flex items-center justify-center">
                  <hr className="w-20 my-2 text-center" />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-[500]">Heading Random</h1>
                  <p className="text-sm py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, nisi voluptate ad voluptates totam unde!
                  </p>
                  <a href="" className="font-[600] underline">
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-slate-400 w-full flex items-center transition hover:scale-[1.05] hover:bg-[rgba(15,62,129,0.82)] justify-center p-5 rounded-md bg-[rgb(15,63,129)]">
              <div>
                <div className="flex justify-center pb-2">
                  <MdSecurity className="h-14 w-14" />
                </div>
                <div className="flex items-center justify-center">
                  <hr className="w-20 my-2 text-center" />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-[500]">Heading Random</h1>
                  <p className="text-sm py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, nisi voluptate ad voluptates totam unde!
                  </p>
                  <a href="" className="font-[600] underline">
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-slate-400 w-full flex items-center transition hover:scale-[1.05] hover:bg-[rgba(15,62,129,0.82)] justify-center p-5 rounded-md bg-[rgb(15,63,129)]">
              <div>
                <div className="flex justify-center pb-2">
                  <IoIosPeople className="h-14 w-14" />
                </div>
                <div className="flex items-center justify-center">
                  <hr className="w-20 my-2 text-center" />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-[500]">Heading Random</h1>
                  <p className="text-sm py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, nisi voluptate ad voluptates totam unde!
                  </p>
                  <a href="" className="font-[600] underline">
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-slate-400 w-full flex items-center transition hover:scale-[1.05] hover:bg-[rgba(15,62,129,0.82)] justify-center p-5 rounded-md bg-[rgb(15,63,129)]">
              <div>
                <div className="flex justify-center pb-2">
                  <RiGovernmentFill className="h-14 w-14" />
                </div>
                <div className="flex items-center justify-center">
                  <hr className="w-20 my-2 text-center" />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-[500]">Heading Random</h1>
                  <p className="text-sm py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, nisi voluptate ad voluptates totam unde!
                  </p>
                  <a
                    href=""
                    className="font-[600] underline flex items-center justify-center gap-3"
                  >
                    Learn More
                    <FaArrowRightLong />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-slate-400 w-full flex items-center transition hover:scale-[1.05] hover:bg-[rgba(15,62,129,0.82)] justify-center p-5 rounded-md bg-[rgb(15,63,129)]">
              <div>
                <div className="flex justify-center pb-2">
                  <MdHowToVote className="h-14 w-14" />
                </div>
                <div className="flex items-center justify-center">
                  <hr className="w-20 my-2 text-center" />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-[500]">Heading Random</h1>
                  <p className="text-sm py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, nisi voluptate ad voluptates totam unde!
                  </p>
                  <a href="" className="font-[600] underline">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
