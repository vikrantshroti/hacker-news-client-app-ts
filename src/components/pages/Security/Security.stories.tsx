import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Security from "./Security";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Security", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Security />);
