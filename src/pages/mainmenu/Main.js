import React from "react";
import Header from "./Header.js";
import ChargingStatus from "./ChargingStatus.js";
import Menu from "./Menu.js";

function Main() {
    return (
        <div>
            <Header />
            <ChargingStatus />
            <Menu />
        </div>
    );
}

export default Main;
