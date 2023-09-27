import React from 'react'

function Studentsection() {
  return (
    <>
     <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">

    <div className="w-full h-auto flex flex-wrap flex-col items-center">
      <p className="text-indigo-800 text-bold text-3xl md:text-4xl text-center">Pure Hardwork , No Shortcuts</p>
      <div className="w-36 h=1 border-b-4 border-yellow-400 mt-2 rounded-3xl md:mt-4 mb-12"></div>
    </div>

    <div className="w-full flex flex-wrap justify-evenly cursor-pointer">

      <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-16 h-16" src="https://pwskills.com/images/homePage/statistics2.png" alt="" />
        <p className="text-3xl font-bold text-white">600+</p>
        <p className="text-2xl font-bold text-gray-500">Different Courses</p>
      </div>
      <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-16 h-16" src="https://pwskills.com/images/homePage/statistics1.png" alt="" />
        <p className="text-3xl font-bold text-white">55%</p>
        <p className="text-2xl font-bold text-gray-500">Average Salary Hike</p>
      </div>
      <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-16 h-16" src="https://pwskills.com/images/homePage/statistics3.png" alt="" />
        <p className="text-3xl font-bold text-white">400+</p>
        <p className="text-2xl font-bold text-gray-500">Hiring Partners</p>
      </div>

    </div>



  </div>

    
    
    
    
    </>
  )
}

export default Studentsection