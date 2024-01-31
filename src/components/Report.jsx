import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
function Report() {
  const location = useLocation();
  const response = location.state?.response;
  return (
    <div className="flex justify-center mt-12">
      <div className="w-5/6 flex justify-center bg-white rounded-lg shadow-lg h-96 overflow-x-hidden overflow-y-auto">
        <div className="w-2/6 mx-auto mt-6 flex flex-col  justify-center">
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="h-36 flex flex-col items-center "
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-green-500 text-green-500 font-bold text-lg">
              <h1 className="text-2xl">{response.overall.score}</h1>
            </div>
            <h1 className="text-center text-green-500 font-bold text-2xl">
              {response.overall.health}
            </h1>
          </motion.div>
          <div className="text-center leading-9 font-semibold">
            <h1 className="shadow h-12 flex justify-evenly text-yellow-700 ">
              <span className="w-3/6">Investment </span>
              <span className="text-yellow-700 ">
                {response.investment.score}
              </span>{" "}
              <span className="text-yellow-700 w-2/6">
                {response.investment.health}
              </span>
            </h1>
            <h1 className="shadow h-12 flex justify-evenly text-yellow-700">
              <span className="w-3/6">Savings </span>
              <span className="text-yellow-700">
                {response.savings.score}
              </span>{" "}
              <span className="text-yellow-700 w-2/6">
                {response.savings.health}
              </span>
            </h1>
            <h1 className="shadow h-12 flex justify-evenly text-red-500">
              <span className="w-3/6">Expense </span>
              <span className="text-red-500">
                {response.expense.score}
              </span>{" "}
              <span className="text-red-500 w-2/6">
                {response.expense.health}
              </span>
            </h1>
            <h1 className="shadow h-12 flex justify-evenly text-green-700">
              <span className="w-3/6">Depts </span>
              <span className="text-green-700">
                {response.depts.score}
              </span>{" "}
              <span className="text-green-700 w-2/6">
                {response.depts.health}
              </span>
            </h1>
          </div>
        </div>

        <div className="flex justify-center  w-5/6 p-12  overflow-y-auto">
          <ul className="list-disc list-inside">
            {response.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Report;
