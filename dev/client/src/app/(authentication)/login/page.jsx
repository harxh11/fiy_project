"use client";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import signupImage from "../../../../public/images/signup dashboard.jpg";

const Page = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex items-center justify-center h-[90vh]">
        <div className="w-[80%] p-10 flex items-center justify-center border-[1px] py-10 rounded-[10px] text-white">
          <form className="w-auto pr-10">
            <h1
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="text-center font-[500] text-[34px]"
            >
              Welcome Back!
            </h1>
            <p className="text-center text-[12px] mb-5 font-[500]">
              Please Sign In to continue.
            </p>
            {/* <label htmlFor="FullName">Full Name</label> */}
            {/* <input type="text" placeholder="Full Name" name="FullName" id="" className="block px-2 border-2 rounded-[7px] mb-3 py-2 text-black my-2 w-[300px]" /> */}
            {/* <label htmlFor="email">Email</label> */}
            <input
              placeholder="Email"
              type="text"
              name="email"
              id=""
              className="block px-2 border-2 py-2 text-black my-2 rounded-[7px] mb-3 w-[300px]"
            />
            {/* <label htmlFor="mobile">Mobile</label>
                        <input type="text" placeholder="eg. 9012472" name="mobile" id="" className="py-1 text-black mt-1 block px-2 border-2 rounded-[7px] mb-3 w-[300px]" /> */}
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              id=""
              className="w-[300px] py-2 text-black my-2 block px-2 border-2 rounded-[7px] mb-3"
            />
            {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              id=""
              className="w-[300px] py-2 my-2 block px-2 border-2 rounded-[7px]"
            />
            <div className="text-center">
              <button className=" py-1 px-3 my-4 rounded-[10px] text-white bg-[rgb(8,12,44)] hover:bg-[rgb(15,63,129)] transition duration-[0.2s] hover:scale-[1.1] text-center font-[600] text-[17px]">
                Submit
              </button>
            </div>
            {/* <p className="text-[10px] my-2">By clicking this button you agree to Stayvana's <span className="text-[#808080] underline">Privacy Policy</span> and <span className="text-[#808080] underline">Terms of Service</span></p> */}

            <hr className="" />

            <div className="pt-3">
              {/* <h1 className="text-center opacity-50 text-[15px]">Or signup using</h1> */}
              <div className="flex justify-center gap-7 text-white ">
                <div className="bg-[rgb(8,12,44)] hover:bg-[rgb(15,63,129)] transition duration-[0.2s] flex p-2 rounded-[10px] hover:scale-[1.15] cursor-pointer">
                  <FaGoogle size={25} />
                </div>
                <div className="bg-[rgb(8,12,44)] hover:bg-[rgb(15,63,129)] transition duration-[0.2s] flex p-2 hover:scale-[1.15] rounded-[10px] cursor-pointer">
                  <FaFacebook size={25} />
                </div>
                <div className="flex p-2 bg-[rgb(8,12,44)] hover:bg-[rgb(15,63,129)] transition duration-[0.2s] hover:scale-[1.15] cursor-pointer rounded-[10px]">
                  <FaGithub size={25} />
                </div>
              </div>
              <h1
                className="text-center opacity-70 mt-4 cursor-pointer"
                onClick={() => {
                  router.push("/register");
                }}
              >
                Don't have an account?{" "}
                <span
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  className="font-[500] text-[17px] hover:underline transition duration-200"
                >
                  Sign Up
                </span>{" "}
              </h1>
            </div>
          </form>
          <div className="flex items-center justify-center relative border-l-2 pl-5">
            <Image
              unoptimized
              src={signupImage}
              width={100}
              height={100}
              alt=""
              className="w-[50%] absolute rounded-lg opacity-30"
            />
            <div className="bg-white bg-opacity-10 px-10 rounded-[20px] text-center py-3">
              <h1
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="font-[500] my-3 text-[35px]"
              >
                Welcome Back User!
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                distinctio.
              </h1>
              <h1 className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, fugiat? Et sequi iusto tempore porro. Recusandae
                repellat esse aut earum!
              </h1>
              <h1 className="my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsa ipsum minima non repellendus libero reprehenderit tempora
                molestiae. Ab ex voluptatum pariatur debitis, temporibus placeat
                ducimus, officiis, harum et animi qui deleniti! Temporibus alias
                laboriosam quod itaque, iure, veniam ea dolor ratione saepe
                assumenda repudiandae! Omnis magnam facere sapiente ut!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
