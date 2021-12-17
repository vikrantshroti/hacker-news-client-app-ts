import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import News from "./News";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/News", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <News />);
