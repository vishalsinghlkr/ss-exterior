"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "@/features/counter/slices/counterSlice";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StorageIcon from "@mui/icons-material/Storage";

export default function CounterDemo() {
  const dispatch = useAppDispatch();
  const { value, history } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="font-semibold text-slate-800 dark:text-slate-100">
          Redux Toolkit + Redux Persist
        </Typography>
        <Chip
          icon={<StorageIcon fontSize="small" />}
          label="Persisted in LocalStorage"
          size="small"
          color="primary"
          variant="outlined"
        />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        Changes to this counter are automatically serialized and persisted. Try
        incrementing and refreshing the page — your state persists seamlessly!
      </p>

      {/* Counter Value Display */}
      <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
        <div className="text-center">
          <span className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            {value}
          </span>
          <p className="text-xs text-slate-400 mt-1">Current State Value</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <ButtonGroup variant="contained" aria-label="counter button group">
          <Button
            onClick={() => dispatch(decrement())}
            startIcon={<RemoveIcon />}
            color="primary"
          >
            Dec
          </Button>
          <Button
            onClick={() => dispatch(increment())}
            endIcon={<AddIcon />}
            color="primary"
          >
            Inc
          </Button>
        </ButtonGroup>

        <Button
          variant="outlined"
          onClick={() => dispatch(incrementByAmount(5))}
          color="secondary"
        >
          +5 Boost
        </Button>

        <Button
          variant="text"
          onClick={() => dispatch(reset())}
          startIcon={<RestartAltIcon />}
          color="error"
        >
          Reset
        </Button>
      </div>

      {/* History badges */}
      {history.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pt-2">
          <span className="text-xs text-slate-400 shrink-0">Recent:</span>
          {history.slice(-6).map((h, idx) => (
            <span
              key={`${h}-${idx}`}
              className="text-xs font-mono px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {h}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
