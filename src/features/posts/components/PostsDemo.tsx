"use client";

import React from "react";
import { useGetPostsQuery } from "@/features/posts/services/postsApi";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Skeleton from "@mui/material/Skeleton";
import RefreshIcon from "@mui/icons-material/Refresh";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function PostsDemo() {
  const { data: posts, isLoading, isFetching, isError, refetch } =
    useGetPostsQuery({ limit: 4 });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="font-semibold text-slate-800 dark:text-slate-100">
          RTK Query (Caching & Data Fetching)
        </Typography>
        <div className="flex items-center gap-2">
          <Chip
            icon={<CloudDoneIcon fontSize="small" />}
            label={isFetching ? "Refetching..." : "Cached"}
            size="small"
            color={isFetching ? "warning" : "success"}
            variant="outlined"
          />
          <Button
            size="small"
            variant="outlined"
            onClick={() => refetch()}
            disabled={isFetching}
            startIcon={
              <RefreshIcon className={isFetching ? "animate-spin" : ""} />
            }
          >
            Refetch
          </Button>
        </div>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        Live data queried with automatic deduplication, normalized caching, and tag invalidation.
      </p>

      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40"
            >
              <Skeleton variant="text" width="70%" height={24} />
              <Skeleton variant="text" width="90%" height={16} />
              <Skeleton variant="text" width="50%" height={16} />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-300">
          <ErrorOutlineIcon />
          <span className="text-sm font-medium">
            Failed to fetch posts. Please check your network connection.
          </span>
        </div>
      )}

      {/* Data display */}
      {!isLoading && !isError && posts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-between p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors shadow-xs"
            >
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 mb-2">
                  Post #{post.id}
                </span>
                <h4 className="text-sm font-semibold capitalize text-slate-900 dark:text-white line-clamp-1 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {post.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
