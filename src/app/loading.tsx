import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-pulse">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton variant="rounded" width={180} height={32} />
        <Skeleton variant="text" width="60%" height={60} />
        <Skeleton variant="text" width="40%" height={24} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} variant="rounded" height={160} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        <Skeleton variant="rounded" height={320} />
        <Skeleton variant="rounded" height={320} />
      </div>
    </div>
  );
}
