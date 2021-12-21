import React from "react";
import { IProps } from "./types";

const Link = ({ text, href, className, rel, target }: IProps) => {
  return (
    <a href={href} className={className} rel={rel} target={target}>
      {text}
    </a>
  );
};

export default Link;
