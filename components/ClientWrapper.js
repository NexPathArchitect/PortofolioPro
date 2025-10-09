"use client";
import { useEffect } from "react";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    console.log("Runs on client only");
  }, []);

  return <>{children}</>;
}
