import { Skeleton } from "@/components/ui/skeleton";

const SettingSkeleton = () => {
  return (
    <>
      <div className="flex flex-col ml-24 mt-32">
        <Skeleton className="w-[100px] h-[20px] " />
        <Skeleton className="w-[300px] h-[40px] rounded-md mt-3" />
        <Skeleton className="w-[150px] h-[45px] rounded-md mt-16" />
      </div>
    </>
  );
};

export default SettingSkeleton;
