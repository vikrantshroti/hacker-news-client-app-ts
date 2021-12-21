import React from "react";
import { IProps } from "./types";

const Text = ({ text, className }: IProps) => {
  return <span className={className}>{text}</span>;
};

export default Text;
