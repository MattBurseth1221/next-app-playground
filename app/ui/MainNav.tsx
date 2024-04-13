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
      <nav className="w-40 min-h-screen absolute left-0 px-5 border-r-white-200 border-opacity-50">
        <ul>
          <NavItem linkRedirect="/meteor-data" itemName="Meteor Data" active={active === "Meteor Data"}/>
          <NavItem linkRedirect="/nasa-potd" itemName="NASA POTD" active={active === "NASA POTD"} />
          <NavItem linkRedirect="/meteor-data" itemName="Other Data 2" active={active === "Other Data 2"} />
        </ul>
      </nav>
    </>
  );
}
