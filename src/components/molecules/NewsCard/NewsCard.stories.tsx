/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import NewsCard from "./NewsCard";
import { ITEM_BASE_URL } from "../../../utils";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Molecules/NewsCard", module)
  .addDecorator(StoryRouter())
  .add("Default", () => (
    <NewsCard index={1} key={1} subUrl={`${ITEM_BASE_URL}/23734093.json`} />
  ));
