import React from "react";
import { motion} from "framer-motion";
function Report() {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-5/6 flex justify-center bg-white rounded-lg shadow-lg h-96 overflow-x-hidden overflow-y-auto">
        <div className="w-2/6 mx-auto mt-6 flex flex-col  justify-center">
          <motion.div whileHover={{scale:1.3}} className="h-36 flex flex-col items-center ">
            <div  className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-green-500 text-green-500 font-bold text-lg">
              <h1 className="text-2xl">38</h1>
            </div>
            <h1 className="text-center text-green-500 font-bold text-2xl">
              Good
            </h1>
          </motion.div>
          <div className="text-center leading-9 font-semibold">
            <h1 className="shadow h-12 flex justify-evenly text-yellow-700 ">
              <span className="w-3/6">Investment </span><span className="text-yellow-700 ">60</span>{" "}
              <span className="text-yellow-700 w-2/6">Average</span>
            </h1>
            <h1 className="shadow h-12 flex justify-evenly text-yellow-700">
            <span className="w-3/6">Savings </span><span className="text-yellow-700">45</span>{" "}
              <span className="text-yellow-700 w-2/6">Average</span>
            </h1>
            <h1 className="shadow h-12 flex justify-evenly text-red-500">
            <span className="w-3/6">Expense </span><span className="text-red-500">25</span>{" "}
              <span className="text-red-500 w-2/6">Poor</span>
            </h1>
            <h1 className="shadow h-12 flex justify-evenly text-green-700">
            <span className="w-3/6">Depts </span><span className="text-green-700">80</span>{" "}
              <span className="text-green-700 w-2/6">Excellent</span>
            </h1>
          </div>
        </div>

        <div className="flex justify-center  w-5/6 p-12  overflow-y-auto">
        
  <ul className="list-disc list-inside">
  
    <li>Overall: 38 (Good) Your overall budget management is considered good.
      Continue to monitor your spending and savings habits, and look for
      opportunities to improve.</li>
    <li> Investment: 60 (Average) Consider
      diversifying your investments and reviewing your investment strategy.
      If possible, consult with a financial advisor to ensure your
      investment portfolio aligns with your financial goals.</li>
    <li>Savings: 45
      (Average) Aim to increase your savings rate. Set specific savings
      goals and create a budget that allows you to allocate a portion of
      your income to savings regularly.</li>
    <li> Expense: 25 (Poor) Evaluate your
      expenses and identify areas where you can cut back. Create a detailed
      budget to track your spending and prioritize essential expenses over
      non-essential ones.</li>
    <li>Debts: 80 (Excellent) Congratulations on managing
      your debts effectively. Continue to prioritize debt repayment, and
      consider allocating additional funds towards paying down any
      outstanding debts.</li>
    <li className="font-bold">General Tips</li>
    <li>Create a detailed budget to track
      income, expenses, and savings.</li>
    <li>Prioritize essential expenses such as
      housing, utilities, and groceries. Set clear financial goals, both
      short-term and long-term. </li>
    <li>Regularly review and adjust your budget as
      your financial situation changes. Consider building an emergency fund
      to cover unexpected expenses.</li>
    <li>  Explore opportunities for additional
      income or investments to boost your financial health.{" "}</li>
  </ul>
</div>

      </div>
    </div>
  );
}
export default Report;
