import { BiSortAlt2 } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

import { FaCaretDown } from "react-icons/fa6";

import '../App.css'
import Pagination from "./Pagination";


const transactions = [
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
    {
        orderID: "281209",
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFees: 22
    },
]
const Transactions = () => {

    return (
        <>
            <h2 className="text-xl font-medium">Transactions | This Month</h2>
            <div className="px-2 pb-2 shadow-sm shadow-slate-300 rounded-md">
                <div className="flex justify-between my-8">
                    <input type="text" name="searchTransactions" id="searchTransactions" placeholder="Search by Order ID..." className="bg-white border-2 w-[280px]"/>
                    <div className="flex gap-8 text-[16px] text-slate-600">
                        <button className="flex items-center gap-1 px-3 border-2 rounded-md">
                            Sort<BiSortAlt2 />
                        </button>
                        <button className="px-3 border-2 text-xl rounded-md">
                            <MdOutlineFileDownload />
                        </button>
                    </div>
                </div>
                <div>
                    <table className="w-full rounded-md ">
                        <thead className="px-3">
                            <tr className="text-left text-gray-500 p-3">
                                <th className="px-4 py-2 ">Order ID</th>
                                <th className="px-4 py-2 flex items-center">Order date  <FaCaretDown className="inline "/></th>
                                <th className="px-4 py-2 text-right">Order amount</th>
                                <th className="px-4 py-2 text-right">Transaction fees &#9432;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => {
                                return (
                                    <tr key={transaction.orderID} >
                                        <td className="border-y-[1px] px-4 py-3 text-[#458cc3] font-medium">#{transaction.orderID}</td>
                                        <td className="border-y-[1px] px-4 py-3">{transaction.orderDate}</td>
                                        <td className="border-y-[1px] text-right px-4 py-3">&#8377;{transaction.orderAmount.toLocaleString()}</td>
                                        <td className="border-y-[1px] text-right px-4 py-3">&#8377;{transaction.transactionFees}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <ul>
                    </ul>
                </div>
                {/* pagination */}
                <Pagination />
                <div></div>
            </div>
        </>
    )
}

export default Transactions