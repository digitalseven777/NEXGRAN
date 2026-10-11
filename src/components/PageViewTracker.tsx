"use client";
import { useEffect } from "react";
import { track } from "@/lib/tracking";

export function PageViewTracker() {
  useEffect(() => {
    track("view_page", { path: window.location.pathname });
  }, []);
  return null;
}
