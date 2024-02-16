"use client";
import { Timeline } from "primereact/timeline";
import Link from "next/link";
// import "./TimelineDemo.css";
import { htmlData } from "../../data/trainingData";

const customizedMarker = (item) => {
  return (
    <span
      className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
      style={{ backgroundColor: item.color }}
    >
      <i className={item.icon}></i>
    </span>
  );
};

const customizedContent = (item) => {
  return (
    <div className="row" style={{ width: "500px" }}>
      <div className="  ">
        <div className="card mb-4 mb-xl-0 card-hover border">
          <div className="card-body">
            <h3 className="mb-4 text-truncate">
              <a href="#!" className="text-inherit ">
                {item.name}
              </a>
            </h3>
            <div className="mb-4">
              <div className="mb-3 lh-1">
                <span className="me-1">
                  <i className="bi bi-calendar-event"></i>
                </span>
                <span>day: {item.day} </span>
              </div>
              <div className="mb-3 lh-1">
                <span className="me-1">
                  <i className="bi bi-calendar-check"></i>
                </span>
                <span>{item.trainingDays} day(s) in a week</span>
              </div>
              <div className="lh-1 ">
                <span className="align-text-top me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </span>
                <span>{item.trainingHours} hrs training in a day</span>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link
                href={`/training/html/theory?topic=${item.name
                  .split(" ")
                  .join("-")}`}
                className="btn btn-light-primary text-primary"
              >
                Theory
              </Link>
              <Link
                href={`/training/html/quiz?topic=${item.name
                  .split(" ")
                  .join("-")}`}
                className="btn btn-light-success text-success"
              >
                Quiz
              </Link>
              <Link
                href={`/training/html/tasks?topic=${item.name
                  .split(" ")
                  .join("-")}`}
                className="btn btn-light-warning text-warning"
              >
                Tasks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HtmlTimeline = () => {
  return (
    <>
      <div className="container py-8 pb-8">
        <Timeline
          value={htmlData}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </>
  );
};

export default HtmlTimeline;
