"use client";

import NavItem from "./NavItem";
import { useState, useEffect } from "react";

type Props = {
    active: string;
}

export default function MainNav({active}: Props) {
  useEffect(() => {
    console.log(active);
  })

  return (
    <>
      <nav className="w-40 min-h-screen absolute left-0 px-5 border-r-white-200 border-opacity-50 mt-12">
        <ul>
          <NavItem linkRedirect="/meteor-data" itemName="Meteor Data" active={active === "Meteor Data"}/>
          <NavItem linkRedirect="/nasa-potd" itemName="NASA POTD" active={active === "NASA POTD"} />
          <NavItem linkRedirect="/mars-rover" itemName="Mars Rover" active={active === "Mars Rover"} />
        </ul>
      </nav>
    </>
  );
}
