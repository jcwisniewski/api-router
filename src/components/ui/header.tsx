import React from "react";
import Link from "next/link";
import Button from "./button";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <div className="flex row-auto w-full h-20 bg-black   justify-evenly items-center fixed top-0 z-10 overflow-x-hidden">
      <Link href="/advice">
        <Button
          name="Conselhos do dia"
          isActive={path === "/" || path === "/advice" ? true : false}
        />
      </Link>
      <Link href="/chuck">
        <Button
          name="Piadas do Chuck Norris"
          isActive={path === "/chuck" ? true : false}
        />
      </Link>
      <Link href="/random">
        <Button
          name="Pesquise um CEP"
          isActive={path === "/random" ? true : false}
        />
      </Link>
    </div>
  );
}
