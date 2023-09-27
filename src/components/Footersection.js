import React from 'react'

function Footersection() {
  return (
    <>
      <footer className="w-full bg-gray-900 px-4 text-white pt-8  flex flex-col  md:flex-row flex-wrap justify-between md:px-12">
        <div>
          <h1 className="text-3xl font-bold ">Code_With_Us</h1>
          <p className="mt-2">
            <a href="tel:010-1234-5678">Call 010-1234-5678</a>
          </p>
          <p className="my-2">Email us: support@pwskills.com</p>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">Skills</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>

          <div className="cursor-pointer">
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>

          <div className="cursor-pointer">
            <p>Skills Lab</p>
            <p>Job Potal</p>
            <p>Experience Portal</p>
            <p>Hall of fame</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>

          <div className="cursor-pointer">
            <p>Discord channels</p>
            <p>Youtube</p>
            <p>Careers</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Our Clients</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>

          <div className="cursor-pointer">
            <p>Kaspersky</p>
            <p>Pizza School</p>
            <p>Goobne and more..</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footersection