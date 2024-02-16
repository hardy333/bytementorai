import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div
      className="px-2"
      style={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
    >
      <div style={{ marginRight: "auto" }}>
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

      <button className="btn btn-light-warning text-warning">Get Help</button>
      <button className="btn btn-light-success text-success">
        Complete/Submit
      </button>
    </div>
  );
}

export default Navbar;
