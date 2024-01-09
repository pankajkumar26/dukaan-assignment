import "../App.css"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const Pagination = () => {
    const pages = [10,11,12,13,14,15,16,17,18]
  return (
    <div className="flex justify-center items-center gap-2 m-10 text-slate-700">
        <button className="flex gap-2 items-center pageButton border-2 rounded-md mx-4 px-3">
        <RxCaretLeft /> Previous
        </button>
        <p>1</p>
        <p>...</p>
        {pages.map((num) => {
            return(
                <button className="pageButton rounded-md m-1 i text-sm text-slate-700" key={num} id={`page${num}`}>{num}</button>
            )
        })}
        <button className="flex gap-2 items-center pageButton border-2 rounded-md mx-4 px-3">Next <RxCaretRight /></button>
    </div>
  )
}

export default Pagination