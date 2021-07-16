import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem.js";
//import { Button } from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FlareIcon from "@material-ui/icons/Flare";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import FilterCenterFocusIcon from "@material-ui/icons/FilterCenterFocus";
import { grey } from "@material-ui/core/colors";

function Menu() {
    return (
        <div className="menu">
            <MenuItem
                icon={<FlashOnIcon style={{ color: grey[50] }} />}
                title="Power Flow"
                link=""
            />
            <MenuItem
                icon={<FlareIcon style={{ color: grey[50] }} />}
                title="Self-Powered"
                description="75% Self-powered today"
                link=""
            />
            <MenuItem
                icon={<SettingsBackupRestoreIcon style={{ color: grey[50] }} />}
                title="Backup History"
                link="/backuphistory"
            />
            <MenuItem
                icon={<FilterCenterFocusIcon style={{ color: grey[50] }} />}
                title="Customize"
                link=""
            />
        </div>
    );
}

export default Menu;
