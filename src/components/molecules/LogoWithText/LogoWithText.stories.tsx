/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import logo from "../../../logo.svg";
import LogoWithText from "./LogoWithText";

export const Default = () => (
  <LogoWithText text={"React"} width={18} height={18} src={logo} />
);

export default {
  title: "Molecules/LogoWithText",
  component: LogoWithText,
};
