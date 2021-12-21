import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Newest from "./Newest";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Newest", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Newest />);
