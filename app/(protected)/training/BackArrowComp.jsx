import Link from "next/link";
import React from "react";

const BackArrowComp = () => {
  return (
    <div className="container p-2">
      <Link
        href="/training/html"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "#343453",
        }}
      >
        <span style={{ fontSize: 20 }}>
          {" "}
          <i className="bi bi-arrow-left-short"></i>
        </span>
        <span>Go Back </span>
      </Link>
    </div>
  );
};

export default BackArrowComp;
