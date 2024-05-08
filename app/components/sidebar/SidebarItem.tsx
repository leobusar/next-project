"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import style from "./SidebarItem.module.css";

interface Props {
  path: string;
  text: string;
}

function SidebarItem({ path, text }: Props) {
  const pathName = usePathname();

  return (
    <Link href={path} className={`flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600 ${pathName == path && style["active-link"]}`}>
      <span>{text}</span>
    </Link>
  );
}

export default SidebarItem;
