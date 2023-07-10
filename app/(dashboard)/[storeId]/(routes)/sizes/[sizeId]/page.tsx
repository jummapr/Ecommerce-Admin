import prismadb from "@/lib/prismadb";
import { FC } from "react";
import SizeFrom from "./components/SizeForm";

interface SizePageProps {
  params: {
    sizeId: string;
  };
}

const SizePage: FC<SizePageProps> = async ({ params }) => {
  const sizes = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <SizeFrom initialData={sizes}/>
        </div>
    </div>
  )
};

export default SizePage;
