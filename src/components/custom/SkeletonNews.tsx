import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonNews: React.FC = () => {
  return (
    <div className="border-none shadow-none w-full aspect-video rounded-lg ">
      <Skeleton className="w-full h-full bg-white" />
    </div>
  );
};

export default SkeletonNews;
