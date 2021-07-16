import React from "react";
import "./MenuItem.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { grey } from "@material-ui/core/colors"; //https://material-ui.com/customization/color/
import { useHistory } from "react-router-dom";

function MenuItem(props) {
    const history = useHistory();
    const { icon, title, description, link } = props;
    return (
        <div className="menu__item" onClick={() => history.push(link)}>
            <div className="menu__icon">{icon}</div>
            <div className="menu__title">
                <div className="menu__1stline">{title}</div>
                <div
                    className="menu__2ndline"
                    style={
                        description /*  !== "" */
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    {description}
                </div>
            </div>
            <ArrowForwardIosIcon
                className="menu__arrow"
                style={{ color: grey[300] }}
            />
        </div>
    );
}

export default MenuItem;
