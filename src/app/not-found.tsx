import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-7xl font-extrabold text-indigo-600/30">404</span>
      <Typography variant="h4" className="font-bold text-slate-900 dark:text-white mt-2">
        Page Not Found
      </Typography>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
