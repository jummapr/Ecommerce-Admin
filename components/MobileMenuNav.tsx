"use client"

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/IconButton";
import { MainNav } from "./MainNav";

interface MobileMenuNavProps {
  
}

const MobileMenuNav: FC<MobileMenuNavProps> = ({}) => {
    const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
     <Button  variant={"ghost"} onClick={onOpen} className="md:hidden m-0 p-2">
        <Menu />
     </Button>

     <Dialog
        open={open}
        as="div"
        className={"relative z-40 lg:hidden "}
        onClose={onClose}
      >
        {/* BackGround */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog Position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            {/* Close Button */}
            <div className="flex  justify-end px-4 items-start">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <MainNav className="flex-col gap-7" onClose={onClose}/>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
};

export default MobileMenuNav;
