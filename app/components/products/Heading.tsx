"use client";
import React from "react";

interface HeadingProps {
  title: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center }) => {
  return <div className={center ? "text-center" : "text-start"}>{title}</div>;
};

export default Heading;
