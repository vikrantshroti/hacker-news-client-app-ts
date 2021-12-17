import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Comments from "./Comments";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Comments", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Comments />);
