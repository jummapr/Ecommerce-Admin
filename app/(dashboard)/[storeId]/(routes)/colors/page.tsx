import {format} from 'date-fns'
import { FC } from "react";
import {ColorsClient} from "./components/Client";
import prismadb from "@/lib/prismadb";
import { ColorColumn } from "./components/columns";

interface ColorsPageProps {
  params: {
    storeId: string;
  }
}

const ColorsPage: FC<ColorsPageProps> = async({
params
}) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formateColors:ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMM do, yyyy'),
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formateColors}/>
      </div>
    </div>
  );
};

export default ColorsPage;
