import {format} from 'date-fns'
import { FC } from "react";
import {BillboardClient} from "./components/Client";
import prismadb from "@/lib/prismadb";
import { BillboardColumn } from "./components/columns";

interface pageProps {
  params: {
    storeId: string;
  }
}

const page: FC<pageProps> = async({
params
}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formateBillboards:BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMM do, yyyy'),
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formateBillboards}/>
      </div>
    </div>
  );
};

export default page;
