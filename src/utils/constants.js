import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const links = [
  {
    id: 1,
    text: "home",
    icon: <AiFillHome className="icon" />,
    url: "/",
  },
  {
    id: 2,
    text: "add",
    icon: <MdOutlineAddBox className="icon" />,
    url: "/about",
  },
  {
    id: 3,
    text: "profile",
    icon: <CgProfile className="icon" />,
    url: "/:id",
  },
];
