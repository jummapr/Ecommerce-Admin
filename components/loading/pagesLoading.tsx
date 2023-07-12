import { Skeleton } from "@/components/ui/skeleton";

const PagesLoading = () => {
  return (
    <>
      <div className="p-20 ">
        <div>
          <Skeleton className="w-[250px] h-[40px] rounded-md" />
          <Skeleton className="w-[150px] h-[20px] rounded-md mt-3" />
        </div>
        <div className="mt-14">
          <Skeleton className="w-[290px] h-[40px] rounded-md mt-3" />
          <div className="pt-6">
            <Skeleton className="w-full h-[40px] rounded-md mt-3" />
            <Skeleton className="w-full h-[40px] rounded-md mt-3" />
            <Skeleton className="w-full h-[40px] rounded-md mt-3" />
            <Skeleton className="w-full h-[40px] rounded-md mt-3" />
            <Skeleton className="w-full h-[40px] rounded-md mt-3" />
            <Skeleton className="w-full h-[40px] rounded-md mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesLoading;
