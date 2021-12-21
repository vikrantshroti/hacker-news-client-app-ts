/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Link from "./Link";

export const Default = () => (
  <Link href={"https://www.google.co.in"} text={"Google link"} />
);

export default {
  title: "Atoms/Link",
  component: Link,
};
