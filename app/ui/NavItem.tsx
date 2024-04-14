import { useState } from "react";

type Props = {
  itemName: string;
  //   handleNavigation: React.MouseEventHandler<HTMLLIElement>,
  linkRedirect: string;
  active: Boolean;
};

export default function NavItem({ itemName, linkRedirect, active }: Props) {
  return (
    <li
      className={`mb-5 text-center hover:bg-slate-600 cursor-pointer py-2 rounded-2xl transition ease-in duration-150 ${
        active ? "bg-slate-200 text-black" : ""
      }`}
    >
      <a href={linkRedirect}>{itemName}</a>
    </li>
  );
}
