"use client";

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error("App boundary error caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-2xl border border-rose-200 bg-rose-50/60 dark:border-rose-900/50 dark:bg-rose-950/30 p-8 max-w-md w-full">
        <Typography variant="h5" className="font-bold text-rose-700 dark:text-rose-400">
          Something went wrong!
        </Typography>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {error.message || "An unexpected error occurred while rendering this page."}
        </p>
        <div className="mt-6">
          <Button
            variant="contained"
            color="error"
            onClick={() => reset()}
            startIcon={<RefreshIcon />}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
