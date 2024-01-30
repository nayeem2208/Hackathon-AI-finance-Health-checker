import React from "react";
import image from "../../public/—Pngtree—money budgeting management growth business_5006338.png";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";
function ExpenseFinder() {
  return (
    <div className="h-96 flex mt-16">
      <div className="w-3/6 flex justify-center items-center h-96">
        <motion.div whileHover={{scale:1.1}} className="w-3/5 flex flex-col justify-center align-center bg-white w-80 h-80 rounded-lg shadow">
          <img className="w-4/5 h-4/5 p-3 mx-auto" src={image} alt="" />
          <button className="w-4/5 bg-cyan-900 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mx-auto">
            <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-1/2 transform -translate-x-1/2 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
           <Link to='/income_and_expense'> Calculate Financial Health</Link>
          </button>
        </motion.div>
      </div>

      <div className="text-white flex justify-center font-semibold items-center text-8xl w-4/6">
        Your Personal Finance Wingman
      </div>
    </div>
  );
}

export default ExpenseFinder;
