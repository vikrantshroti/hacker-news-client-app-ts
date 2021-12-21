/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import NavigationLink from "./NavigationLink";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Molecules/NavigationLink", module)
  .addDecorator(StoryRouter())
  .add("Default", () => (
    <NavigationLink
      external={true}
      text={"Google"}
      link={"https://www.google.co.in"}
    />
  ));
