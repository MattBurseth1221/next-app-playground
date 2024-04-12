import { useState } from 'react';

type Props = {
  itemName: string,
//   handleNavigation: React.MouseEventHandler<HTMLLIElement>,
  linkRedirect: string,
  active: Boolean;
};

export default function NavItem({ itemName, linkRedirect, active }: Props) {
  return <li className={`mb-5 border-y-2 border-x-2 border-white text-center hover:bg-slate-300 cursor-pointer py-2 ${active ? "bg-slate-400" : ""}`}><a href={linkRedirect}>{itemName}</a></li>;
}
