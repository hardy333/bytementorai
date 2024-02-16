"use client";

import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import HtmlImg from "@/app/imgs/course/course-html.jpg";
import Image from "next/image";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      { text: "Hyper Text Markup Language", isCorrect: true },
      { text: "Hyperlinks and Text Markup Language", isCorrect: false },
      { text: "Home Tool Markup Language", isCorrect: false },
      { text: "Hyper Transfer Markup Language", isCorrect: false },
    ],
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: [
      { text: "<heading>", isCorrect: false },
      { text: "<h6>", isCorrect: false },
      { text: "<head>", isCorrect: false },
      { text: "<h1>", isCorrect: true },
    ],
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      { text: "<ul>", isCorrect: true },
      { text: "<ol>", isCorrect: false },
      { text: "<li>", isCorrect: false },
      { text: "<list>", isCorrect: false },
    ],
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      { text: "<a href='http://www.example.com'>Example</a>", isCorrect: true },
      { text: "<a url='http://www.example.com'>Example</a>", isCorrect: false },
      {
        text: "<hyperlink>http://www.example.com</hyperlink>",
        isCorrect: false,
      },
      { text: "<link>http://www.example.com</link>", isCorrect: false },
    ],
  },
];

const QuizSection = ({ isQuizing, setisQuizing }) => {
  const [currQ, setCurrQ] = useState(0);
  const [selectedAnsw, setSelectedAnsw] = useState(null);
  const [questionCompleted, setQuestionQompleted] = useState(false);

  console.log({ selectedAnsw });
  const validateAnswer = () => {};

  console.log({ selectedAnsw });

  return (
    <>
      <div id="test-l-1" role="tabpanel" className="bs-stepper-pane ">
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
              <div className="d-flex align-items-center">
                <a
                  href="#"
                  style={{ width: 100, height: 61, display: "inline-block" }}
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={HtmlImg}
                    alt="course"
                    className="rounded img-4by3-lg"
                  />
                </a>
                <div className="ms-3">
                  <h3 className="mb-0">
                    <a href="#" className="text-inherit">
                      React Basic Quiz
                    </a>
                  </h3>
                </div>
              </div>
              <div>
                <span className="text-warning">
                  <i className="fe fe-clock me-1 align-middle"></i>
                  00:05:55
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <span>Exam Progress:</span>
                <span>
                  Question {currQ + 1} out of {questions.length}
                </span>
              </div>
              <div className="mt-2">
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: `${(currQ / questions.length) * 100}%`,
                    }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <QuizQuestion
              selectedAnsw={selectedAnsw}
              questionCompleted={questionCompleted}
              setSelectedAnsw={setSelectedAnsw}
              questions={questions}
              currQ={currQ}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          {currQ === questions.length - 1 && questionCompleted ? null : (
            <>
              <button
                className="btn btn-light-success text-success ml-auto d-inline-flex me-2"
                disabled={!Number.isInteger(selectedAnsw) || questionCompleted}
                onClick={() => {
                  setQuestionQompleted(true);
                  validateAnswer();
                }}
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setQuestionQompleted(false);
                  setSelectedAnsw(null);

                  if (currQ < questions.length - 1) {
                    setCurrQ(currQ + 1);
                  }
                }}
                disabled={!questionCompleted}
                className="btn btn-light-warning text-warning"
              >
                Next
              </button>
            </>
          )}
          {currQ === questions.length - 1 && questionCompleted ? (
            <button
              onClick={() => {
                setisQuizing(false);
              }}
              className="btn btn-light-warning text-warning"
            >
              Finish
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default QuizSection;
