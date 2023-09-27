import React from 'react'

function Productsection() {
  return (
   <>

     <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 cursor-pointer">
    <div className="w-full h-auto flex flex-wrap flex-col items-center">
      <p className="text-indigo-800 text-bold text-3xl md:text-4xl text-center">Our Products</p>
      <div className="w-36 h=1 border-b-4 border-yellow-400 mt-2 rounded-3xl md:mt-4 mb-12"></div>
    </div>

    <div className="w-[90%] h-auto flex flex-wrap justify-around">
      <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-lg p-2">
        <img src="https://pwskills.com/images/homePage/products-icon1.png" alt="" />
        <p className="text-2xl text-bold text-gray-500">Coding Skill lab</p>
        <p className="text-xl text-bold text-gray-500">Supercharge your project development with roboust lab</p>
      </div>
      <div className="w-64 flex flex-col items-center mb-12 p-2">
        <img src="https://pwskills.com/images/homePage/products-icon2.png" alt="" />
        <p className="text-2xl text-bold text-gray-500">Experience Portal</p>
        <p className="text-xl text-bold text-gray-500">Self-paced portal prioritizes hands-on training with 570+ internship
          projects.</p>
      </div>
      <div className="w-64 flex flex-col items-center mb-12 p-2">
        <img src="https://pwskills.com/images/homePage/products-icon4.png" alt="" />
        <p className="text-2xl text-bold text-gray-500">Job Portal</p>
        <p className="text-xl text-bold text-gray-500">Use exceptional templates for a stand-out resume minus the sign up
          process.</p>
      </div>
      <div className="w-64 flex flex-col items-center mb-12  p-2">
        <img src="https://pwskills.com/images/homePage/products-icon3.png" alt="" />
        <p className="text-2xl text-bold text-gray-500">Hall Of Fame</p>
        <p className="text-xl text-bold text-gray-500">Our student placements and 100K+ career transitions speak volumes.
        </p>
      </div>
    </div>
  </div>
   
   
   
   </>
  )
}

export default Productsection