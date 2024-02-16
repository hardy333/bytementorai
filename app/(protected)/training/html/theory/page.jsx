"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Chat from "./Chat";

const HtmlTheory = () => {
  const searchParams = useSearchParams();

  const topic = searchParams.get("topic")?.split("-").join(" ");

  return (
    <section
      style={{
        background: "#f1f5f9",
        minHeight: "calc(100vh - 76px)",
        paddingBottom: 50,
      }}
    >
      <div className="container">
        <div
          style={{ alignItems: "center" }}
          className="d-flex flex-column pt-4 justify-content-center"
        >
          <h2>Weclome to theory section</h2>
          <p>
            In here You will learn about <strong>{topic}</strong>{" "}
          </p>
        </div>
        {/*  */}

        <Chat />
      </div>
    </section>
  );
};

export default HtmlTheory;
