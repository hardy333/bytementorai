"use client";

import { useState } from "react";
import QuizSection from "./QuizSection";

const HtmlQuiz = () => {
  const [isQuizing, setisQuizing] = useState(false);

  return (
    <div style={{ background: "#f1f5f9", minHeight: "calc(100vh - 76px)" }}>
      <div className="container py-8">
        <h1 className="text-center">Basic html Tags</h1>
        <button
          onClick={() => setisQuizing(true)}
          className="btn mb-4 btn-light-success mx-auto d-flex text-success"
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
