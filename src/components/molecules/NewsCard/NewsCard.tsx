import React, { useState, useEffect } from "react";
import {
  getDomainName,
  makeDeferGetApiCall,
  miliSecToTime,
} from "../../../utils";
import "./styles.css";

import Text from "../../atoms/Text";
import Link from "../../atoms/Link";
import NavigationLink from "../NavigationLink";
import { IProps } from "./types";

const NewsCard = ({ subUrl, index, type = "news" }: IProps) => {
  const [newsData, setNewsData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = makeDeferGetApiCall(subUrl).subscribe((response) => {
      setNewsData(response);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (loading) return <div />;

  return newsData ? (
    <table>
      <tbody>
        <tr>
          <td align="right">
            {index && <Text text={`${index}.`} className="nc-index" />}
          </td>
          <td>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={newsData.url || ""}
              text={newsData.title}
            />
            {newsData.url && (
              <Text
                text={`${getDomainName(newsData.url)}`}
                className="nc-url"
              />
            )}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            {(type === "news" || type === "newest") && (
              <>
                <Text
                  text={`${newsData.score} Points by ${newsData.by}`}
                  className="nc-by"
                />
                <Text
                  text={` ${miliSecToTime(newsData.time || 0)}`}
                  className="nc-time"
                />
              </>
            )}
            {type === "news" && (
              <>
                <Text text={" | hide | "} className="nc-hide" />
                <NavigationLink
                  link={`/item?id=${newsData.id}`}
                  text={`${newsData.kids ? newsData.kids.length : 0} comments`}
                  className="nc-nl"
                />
              </>
            )}
            {type === "newest" && (
              <Text
                text={`|hide|past|discuss`}
                className="nc-hide-past-dicsuss"
              />
            )}
          </td>
        </tr>
        <tr style={{ height: 5 }}></tr>
      </tbody>
    </table>
  ) : (
    <></>
  );
};

export default NewsCard;
