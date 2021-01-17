import React from "react";

// css
import "./Dashboard.css";

// components
import SideNav from "./SideNav.js";
import BullList from "./BullList.js";
import PieChart from "./PieChart.js";
import Comments from "./Comments.js";

const Dashboard = ({
    currentDashboard,
    setCurrentDashboard,
    setTicker,
    ticker,
}) => {
    if (currentDashboard === 0) { // main dashboard
        return (
            <div>
                <BullList
                    currentDashboard={currentDashboard}
                    setCurrentDashboard={setCurrentDashboard}
                    setTicker={setTicker}
                    ticker={ticker}
                />
                <PieChart />
            </div>
        );
    } else if (currentDashboard === 1) { // individual ticker
        return (
            <div>
                <div className="current-ticker">
                    <div className="current-ticker-text">
                        Current Ticker: <br></br>
                        {ticker}
                    </div>
                </div>
                <SideNav
                    rating={rating}
                    popularity={popularity}
                    rocketships={rocketships}
                    yolos={yolos}
                />
                <Comments
                    comments={comments}
                />
            </div>
        );
    }
};

export default Dashboard;
