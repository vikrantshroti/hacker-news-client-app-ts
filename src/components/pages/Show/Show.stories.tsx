import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Show from "./Show";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Show", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Show />);
