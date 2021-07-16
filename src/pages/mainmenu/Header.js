import React from "react";
import "./Header.css";
import SettingsIcon from "@material-ui/icons/Settings";
import { grey } from "@material-ui/core/colors";

function Header() {
    return (
        <div className="header">
            <div className="header__setting">
                <SettingsIcon className="header__settingicon" style={{ color: grey[50] }} />
            </div>
            <div className="header__title">Energy Demo</div>
        </div>
    );
}

export default Header;
