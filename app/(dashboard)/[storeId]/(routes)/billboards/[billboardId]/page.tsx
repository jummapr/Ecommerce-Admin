import prismadb from "@/lib/prismadb";
import { FC } from "react";
import BillboardForm from "./components/BillboardForm";

interface BillboardProps {
  params: {
    billboardId: string;
  };
}

const Billboard: FC<BillboardProps> = async ({ params }) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboardForm initialData={billboard}/>
        </div>
    </div>
  )
};

export default Billboard;
