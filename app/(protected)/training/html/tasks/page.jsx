"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const HtmlTask = () => {
  const searchParams = useSearchParams();

  const topic = searchParams.get("topic")?.split("-").join(" ");

  return <div>HtmlTask</div>;
};

export default HtmlTask;
