import React from 'react'

function Insights() {
  return (
    <div>
        <div className='p-2'>
            <div className='bg-black border-[#d7d6d6] border-b text-white  rounded-3xl padding-l-3 padding-r-3'>
            <div className='border-[#575656c2] border-b border-l border-r  max-w-7xl mx-auto px-10'>
                <div className='max-w-[68rem] mx-auto w-full pt-20 pb-20 border-[#575656c2] border-l border-r  text-center'>
                <div className="flex justify-center items-center gap-4 text-sm text-gray-300">
            <div className="flex -space-x-2">
              <img
                src="/asset/images/logo/Ellipse 1707.png"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img
                src="/asset/images/logo/Ellipse 1708.png"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img
                src="/asset/images/logo/Ellipse 1709.png"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img
                src="/asset/images/logo/Ellipse 1710.png"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
            </div>
            <div className="flex items-start flex-col gap-2">
            <div>
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-muted">Trusted by 20,000+ ecom players & teams</div>
            </div>
          </div>
          <div className="mt-15 flex flex-col gap-5 items-center  ">
              <div className="text-[40px] font-semibold leading-tight  text-white">
              Are you ready to get <br/>
              the insights?
              </div>
              <p className=" text-[18px] mt-2 leading-normal text-center text-white">
              From noise to clarity — decode what pumps, what dumps, and what <br/> earns. All in real time, all in one dashboard
              </p>
              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
               Start to track now
              </button>
            </div>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Insights