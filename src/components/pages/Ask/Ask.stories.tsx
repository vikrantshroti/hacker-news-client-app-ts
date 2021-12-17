import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Ask from "./Ask";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Ask", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Ask />);
