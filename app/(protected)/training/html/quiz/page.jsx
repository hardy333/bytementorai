"use client";

import { useEffect, useState } from "react";
import QuizSection from "./QuizSection";
import { useSearchParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import toast from "react-hot-toast";
import BackArrowComp from "../../BackArrowComp";

const HtmlQuiz = () => {
  const [isQuizing, setisQuizing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setIsSenerated] = useState(false);
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic")?.split("-").join(" ");

  useEffect(() => {
    if (!isGenerating) return;

    const t = setTimeout(() => {
      setIsGenerating(false);
      setIsSenerated(true);
      toast.success("Quiz was successfully generated!");
    }, 2500);

    return () => {
      clearTimeout(t);
    };
  }, [isGenerating]);
  console.log({ generated });

  return (
    <div style={{ background: "#f1f5f9", minHeight: "calc(100vh - 76px)" }}>
      <BackArrowComp />
      <div className="container py-8">
        <h1 className="text-center">{topic}</h1>
        <button
          onClick={() => {
            setIsGenerating(true);
            toast.success("generating Quiz!, Loading ...");
          }}
          style={{ display: isGenerating || generated ? "none" : "flex" }}
          className="btn mb-4 btn-light-success mx-auto  text-success"
        >
          Generate Quiz
        </button>
        {isGenerating ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Loader />{" "}
          </div>
        ) : null}

        <button
          style={{ display: generated ? "flex" : " none" }}
          onClick={() => setisQuizing(true)}
          className={`btn mb-4 btn-light-success mx-auto ${""}  text-success`}
        >
          Start Quiz
        </button>
        {isQuizing ? (
          <QuizSection isQuizing={isQuizing} setisQuizing={setisQuizing} />
        ) : null}
      </div>
    </div>
  );
};

export default HtmlQuiz;
