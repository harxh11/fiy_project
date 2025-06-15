"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import signupImage from "../../../../public/images/signup dashboard.jpg";
import { useState } from "react";

const ADMIN_EMAIL = "abc@gmail.com";
const ADMIN_PASSWORD = "yourpassword"; // set your password here

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      router.push("/results"); // or whatever your results page route is
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center h-[90vh]">
        <div className="w-[80%] p-10 flex items-center justify-center border-[1px] py-10 rounded-[10px] text-white">
          <form className="w-auto pr-10" onSubmit={handleSubmit}>
            <h1
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
              className="text-center font-[500] text-[34px]"
            >
              Admin Login
            </h1>
            <p className="text-center text-[12px] mb-5 font-[500]">
              Only admin can access this page.
            </p>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-2 border-2 py-2 text-black my-2 rounded-[7px] mb-3 w-[300px]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[300px] py-2 text-black my-2 block px-2 border-2 rounded-[7px] mb-3"
              required
            />
            {error && (
              <div className="text-red-400 text-[14px] mb-2">{error}</div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className=" py-1 px-3 my-4 rounded-[10px] text-white bg-[rgb(8,12,44)] hover:bg-[rgb(15,63,129)] transition duration-[0.2s] hover:scale-[1.1] text-center font-[600] text-[17px]"
              >
                Login
              </button>
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
                Welcome Back Admin!
              </h1>
              <h1>
                Only the admin can access the results and manage the election.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;