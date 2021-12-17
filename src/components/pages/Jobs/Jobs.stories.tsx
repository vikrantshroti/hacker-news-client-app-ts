import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Jobs from "./Jobs";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Jobs", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Jobs />);
