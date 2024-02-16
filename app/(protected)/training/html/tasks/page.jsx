"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import BackArrowComp from "../../BackArrowComp";

const HtmlTask = () => {
  const searchParams = useSearchParams();

  const topic = searchParams.get("topic")?.split("-").join(" ");

  return (
    <div className="py-4">
      <BackArrowComp />
    </div>
  );
};

export default HtmlTask;
