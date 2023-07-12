import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {}

const LoadingSkeleton: FC<LoadingSkeletonProps> = ({}) => {
  return (
    <>
      <div className="p-20">
        <Skeleton className="w-[250px] h-[40px] rounded-full" />
        <Skeleton className="w-[150px] h-[15px] rounded-full mt-3" />

        <div className="flex pt-6 gap-4">
          <Skeleton className="w-[450px] h-[60px] rounded-md" />
          <Skeleton className="w-[450px] h-[60px] rounded-md" />
          <Skeleton className="w-[450px] h-[60px] rounded-md" />
        </div>
        <Skeleton className=" w-[22rem] md:w-[86rem] h-[20rem] rounded-sm mt-5" />
      </div>
    </>
  );
};

export default LoadingSkeleton;
