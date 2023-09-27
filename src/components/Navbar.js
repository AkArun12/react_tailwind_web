import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-6 items-center sticky top-0 ">
        <div className="text-2xl text-indigo-700 font-bold">Code_With_Us</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Gallery</li>
          <li className="mx-[10px] cursor-pointer">Contact</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-[#121658] rounded-lg cursor-pointer text-white">
          Login/Signup
        </div>

        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
}
