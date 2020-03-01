import React from "react";
import {NavLink} from "react-router-dom";

export default function NavItem(props) {
    return (
        <>
            <NavLink
                to={props.to}
                activeStyle={{
                    fontWeight: "bold",
                    color: 'hsl(0, 0%, 21%)'
                }}
            >
                {props.children}
            </NavLink>
        </>
    );
}