import React from "react";
import NewsCard from "../../molecules/NewsCard";
import NavigationLink from "../../molecules/NavigationLink";
import { IProps } from "./types";
import "./styles.css";

const NewsCardContainer = ({
  newsArray,
  nextPageQuery,
  subUrl,
  indexStart,
  isNextPage,
  type,
}: IProps) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => {
      return (
        <NewsCard
          index={indexStart + (index + 1)}
          key={index}
          subUrl={`${subUrl}/${item}.json`}
          type={type}
        />
      );
    });

  return (
    <table>
      <tbody>
        <tr className="nccc-tr-top" />
        {renderNews}

        {isNextPage && (
          <tr>
            <td>
              <NavigationLink
                link={nextPageQuery}
                text={"More"}
                className="nccc-nl"
              />
            </td>
          </tr>
        )}
        <tr className="nccc-tr-bottom" />
      </tbody>
    </table>
  );
};

export default NewsCardContainer;
