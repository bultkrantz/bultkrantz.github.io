import React from "react";
import Navigation from "../navigation";

export default function Layout(props) {
  return (
    <div
      style={{
        margin: "5vw"
      }}
    >
      {props.children}
      <Navigation />
    </div>
  );
}
