import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Guidelines from "./Guidelines";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Guidelines", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Guidelines />);
