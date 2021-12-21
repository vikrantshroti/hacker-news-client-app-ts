import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Header from "./Header";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Organisms/Header", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Header />);
