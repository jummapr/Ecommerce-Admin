import LoadingSkeleton from "@/components/loading/HomeLoading";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="h-full flex items-center justify-center ">
        <ClipLoader color="#3f98ea" />
      </div>
    </>
  );
}
