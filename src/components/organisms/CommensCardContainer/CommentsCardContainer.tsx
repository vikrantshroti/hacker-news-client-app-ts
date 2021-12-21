import React from "react";
import NewsCard from "../../molecules/NewsCard";
import CommentsCard from "../../molecules/CommentsCard";
import { IProps } from "./types";
import "./styles.css";

const CommentsCardContainer = ({
  subUrl,
  commentsArray,
  inputComment = "Add comment",
}: IProps) => {
  return (
    <div className={"ccc-container"}>
      <NewsCard subUrl={`${subUrl}/${commentsArray.id}.json`} />
      <textarea name={"text"} rows={6} cols={60} />
      <br />
      <input type={"submit"} value={inputComment} />
      <div className="ccc-cc-container">
        {Array.isArray(commentsArray.kids) &&
          commentsArray.kids.map((item: any, index: number) => {
            return <CommentsCard key={index} id={item} subUrl={subUrl} />;
          })}
      </div>
    </div>
  );
};

export default CommentsCardContainer;
