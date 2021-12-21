import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import FAQ from "./FAQ";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/FAQ", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <FAQ />);
