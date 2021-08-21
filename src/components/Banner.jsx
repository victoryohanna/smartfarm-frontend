import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h5> {title} </h5>   
      <div className="lines"></div>
      <p> {subtitle}</p>
      {children}
    </div>
  );
}
