import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface loadingHeadingProps {}

const loadingHeading: FC<loadingHeadingProps> = ({}) => {
  return (
    <div className="p-20">
      <Skeleton className="w-[250px] h-[40px] rounded-full" />
      <Skeleton className="w-[150px] h-[15px] rounded-full mt-3" />
    </div>
  );
};

export default loadingHeading;
