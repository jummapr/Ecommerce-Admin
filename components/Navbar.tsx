

import { FC, useState } from "react";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { MainNav } from "@/components/MainNav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
import { ThemToggle } from "@/components/theme-toggle";
import MobileMenuNav from "./MobileMenuNav";

interface NavbarProps {}

const Navbar = async ({}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <div className="hidden lg:block">
          <MainNav className="mx-6" />
          
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemToggle />
          <MobileMenuNav />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
