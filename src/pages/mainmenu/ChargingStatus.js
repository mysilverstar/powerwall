import React, { useState, useEffect } from "react";
import "./ChargingStatus.css";
import BatteryImage from "./battery_wall.png";

function ChargingStatus() {
    // Timer ref. https://velog.io/@dongdong98/React-Hook%EC%97%90%EC%84%9C-setInterval-setTimeout%EC%9D%84-%ED%98%84%EB%AA%85%ED%95%98%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
    const [charging_percent, setChargingPercent] = useState(0);
    useEffect(() => {
        const charging = setTimeout(() => {
            if (charging_percent >= 100) {
                clearTimeout(charging);
            } else {
                setChargingPercent(charging_percent + 1);
            }
        }, 98);
    }, [charging_percent]);

    const glow0 = {
        color: "rgb(255, 21, 21)",
        animation: "glow-0 1s ease-in-out infinite alternate",
    };

    const glow20 = {
        color: "#ffb560",
        animation: "glow-20 1s ease-in-out infinite alternate",
    };

    const glow80 = {
        color: "#e6e31a",
        animation: "glow-80 1s ease-in-out infinite alternate",
    };

    const glow100 = {
        color: "#64cc04",
        animation: "glow-100 1s ease-in-out infinite alternate",
    };

    return (
        <div className="status">
            <div
                className="status__text"
                style={
                    charging_percent < 20
                        ? glow0
                        : charging_percent < 40
                        ? glow20
                        : charging_percent < 80
                        ? glow80
                        : glow100
                }
            >
                {charging_percent === 100 ? "Complete" : "Charging"}
            </div>
            <div className="status__img">
                <img src={BatteryImage} alt="" />
                <div className="battery_container">
                    <div className="charging_bar"></div>
                </div>
                <div className="battery_level">
                    <div className="battery_level_line"></div>
                    <div className="battery_level_text">
                        {charging_percent}%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChargingStatus;
