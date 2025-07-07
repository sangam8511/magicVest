import React from "react";

function Testamonials() {
  return (
    <div className="border-[#d7d6d6] border-b">
      <div className="border-[#d7d6d6] mt-[-9px]   border-l border-r  max-w-7xl mx-auto flex items-center flex-col justify-center ">
        <div className="max-w-[68rem] w-full pt-20 pb-10 border-[#d7d6d6] border-l border-r  text-center">
          <div className="flex gap-20 justify-center">
            <div className="flex gap-2">
              <img src="./asset/images/logo/users.svg" alt="" />
              <div>
                <div className="text-l font-bold text-black">10 000+ users</div>
                <div className="text-sm text-black">Already use MagicVest</div>
              </div>
            </div>
            <div className="flex gap-2">
              <img src="./asset/images/logo/star.svg" alt="" />
              <div>
                <div className="text-l font-bold text-black">
                  4.9/5 based on +100 reviews
                </div>
                <div className="text-sm text-black">Already use MagicVest</div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-end px-10">
            <div className="mt-20  flex flex-col items-start ">
              <div className="text-[40px] font-semibold leading-tight  text-black">
                They loved it, why not you?
              </div>
              <p className="max-w-[450px] text-[18px] mt-2 leading-normal text-start text-black">
                Join over 10,000 investors who trust MagicVest to spot
                opportunities, flag scams, and win early. Will you be next?
              </p>
            </div>
       
              <button className="px-6 py-3 bg-lime-400 text-black rounded-full text-sm font-semibold hover:bg-lime-300 transition">
                Scan Any Token
              </button>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testamonials;
