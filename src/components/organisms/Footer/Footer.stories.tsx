import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Footer from "./Footer";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Organisms/Footer", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Footer />);
