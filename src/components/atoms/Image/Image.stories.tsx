/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Image from "./Image";
import logo from "../../../logo.svg";

export const Default = () => <Image src={logo} width={100} height={100} />;

export default {
  title: "Atoms/Image",
  component: Image,
};
