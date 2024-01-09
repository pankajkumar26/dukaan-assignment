import SideNavBar from "../components/SideNavBar"
import TopNavBar from "../components/TopNavBar"
import Transactions from "../components/Transactions"

import '../App.css'
const Home = () => {
  return (
    <>
      <div className="mainContainerHomePage flex">
        <div className="sideNavBar">
          <SideNavBar />
        </div>
        <div className="topNavBar flex flex-col">
          <TopNavBar/>
          <div className="p-8">
            
            {/* Overview and Dropdown box */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium">Overview</h3>
              <div className="border-2 px-3 py-1 rounded-md">
                <label htmlFor="month">Last Month</label>
                <select name="month" id="month" defaultValue="Last Month" className="w-5"></select>
              </div>
            </div>
            {/* Number Counts*/}
            <div className="flex gap-5 my-5">
              <div className="statsBox">
                <p className="textStatsBox">Online orders</p>
                <p className="numberStatsBox">231</p>
              </div>
              <div className="statsBox">
                <p className="textStatsBox">Amount received</p>
                <p className="numberStatsBox">&#8377; 23,92,312.19</p>
              </div>
            </div>

            {/* Transactions */}
            <div >
              <Transactions />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home

/*
    <div className="flex">
      {children ? <SideNavBar/> : null}
      <SideNavBar />
      <TopNavBar/>
    </div>
 */