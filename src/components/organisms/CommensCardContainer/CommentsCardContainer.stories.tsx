import React from "react";
import { ITEM_BASE_URL } from "../../../utils";
import CommentsCardContainer from "./CommentsCardContainer";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Organisms/CommentsCardContainer", module)
  .addDecorator(StoryRouter())
  .add("Default", () => (
    <CommentsCardContainer
      subUrl={ITEM_BASE_URL}
      commentsArray={{
        by: "noir-york",
        descendants: 41,
        id: 24727890,
        kids: [
          24728190,
          24728607,
          24728316,
          24728565,
          24728424,
          24728522,
          24728463,
          24728479,
          24728264,
          24728243,
          24728280,
        ],
        score: 72,
        time: 1602231444,
        title: "Faith in government declines when mobile internet arrives",
        type: "story",
        url:
          "https://www.economist.com/graphic-detail/2020/10/10/faith-in-government-declines-when-mobile-internet-arrives",
      }}
    />
  ));
