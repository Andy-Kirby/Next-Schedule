import React from "react";
import Link from "next/link";
import { UserIcon, FingerPrintIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex justify-around max-w-full bg-zinc-950">
      <ul className="pl-[22%] pt-4 pb-2 [&>*]:px-5 flex items-center [&>*]:whitespace-nowrap [&>*]:hover:shadow-white">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Packages</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Book Online</Link>
      </ul>
      <div className="text-xs pt-4 pb-2 [&>*]:pl-3 flex items-center justify-end [&>*]:whitespace-nowrap">
        <Link href="/" className="flex">
          <UserIcon className="pr-2 h-4" />
          My Account
        </Link>
        <Link href="/" className="flex">
          <FingerPrintIcon className="pr-2 h-4" />
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
