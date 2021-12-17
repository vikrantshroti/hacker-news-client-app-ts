import React, { useState, useEffect } from "react";
import { makeDeferGetApiCall, miliSecToTime } from "../../../utils";
import Text from "../../atoms/Text";
import { IProps } from "./types";
import "./styles.css";

const CommentsCard = ({ id, subUrl, className }: IProps) => {
  const [commentsData, setCommentsData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = makeDeferGetApiCall(`${subUrl}/${id}.json`).subscribe(
      (response) => {
        setCommentsData(response);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [id, subUrl]);

  if (loading) return <></>;

  return commentsData && !commentsData.deleted ? (
    <div className={className}>
      <div>
        <Text text={`${commentsData.by}`} className="cc-comments-by" />
        <Text
          text={miliSecToTime(commentsData.time)}
          className="cc-comments-time"
        />
      </div>
      <div>{commentsData.text}</div>
      <Text text={"reply"} className="cc-reply" />
      <br />
      <br />
      {Array.isArray(commentsData.kids) &&
        commentsData.kids.map((item: any, index: number) => {
          return (
            <CommentsCard
              className={"cc-comments-card"}
              key={index}
              subUrl={subUrl}
              id={item}
            />
          );
        })}
    </div>
  ) : (
    <></>
  );
};

export default CommentsCard;
