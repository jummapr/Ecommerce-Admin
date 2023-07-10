import {format} from 'date-fns'
import { FC } from "react";
import {SizesClient} from "./components/Client";
import prismadb from "@/lib/prismadb";
import { SizesColumn } from "./components/columns";

interface SizesPageProps {
  params: {
    storeId: string;
  }
}

const SizesPage: FC<SizesPageProps> = async({
params
}) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formateSizes:SizesColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMM do, yyyy'),
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formateSizes}/>
      </div>
    </div>
  );
};

export default SizesPage;
