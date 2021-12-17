import React from "react";
import { ITEM_BASE_URL } from "../../../utils";
import NewsCardContainer from "./NewsCardContainer";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Organisms/NewsCardContainer", module)
  .addDecorator(StoryRouter())
  .add("Default", () => (
    <NewsCardContainer
      subUrl={ITEM_BASE_URL}
      newsArray={[
        24727890,
        24726793,
        24713795,
        24720353,
        24726818,
        24726008,
        24708472,
        24727302,
        24717084,
        24720607,
        24727531,
        24718365,
        24721118,
      ]}
      indexStart={0}
      nextPageQuery="/news"
      isNextPage={false}
      type="news"
    />
  ));
