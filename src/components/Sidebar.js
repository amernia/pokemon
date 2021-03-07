import React from "react";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";

export const Sidebar = [
    {
        title: 'Pokemon List',
        path: '/',
        icon: <FaIcons.FaRegListAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'My Pokemon List',
        path: '/my-pokemon',
        icon: <CgIcons.CgPokemon/>,
        cName: 'nav-text'
    },
]
