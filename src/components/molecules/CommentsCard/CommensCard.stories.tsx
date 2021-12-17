/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CommentsCard from "./CommentsCard";
import { ITEM_BASE_URL } from "../../../utils";

export const Default = () => (
  <CommentsCard id={23734093} subUrl={ITEM_BASE_URL} />
);

export default {
  title: "Molecules/CommentsCard",
  component: CommentsCard,
};
