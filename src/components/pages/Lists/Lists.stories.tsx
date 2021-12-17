import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Lists from "./Lists";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Lists", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Lists />);
