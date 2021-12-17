import React, { useState, useEffect } from "react";
import CommentsCardContainer from "../../organisms/CommensCardContainer";
import { useLocation } from "react-router-dom";
import { ITEM_BASE_URL, makeDeferGetApiCall } from "../../../utils";

const Comments = () => {
  const [loading, setLoading] = useState(true);
  const [commentsIds, setCommentsIdArray] = useState();
  const location = useLocation();
  const storyId = Number(new URLSearchParams(location.search).get("id"));

  useEffect(() => {
    const subscription = makeDeferGetApiCall(
      `${ITEM_BASE_URL}/${storyId}.json`
    ).subscribe((resp) => {
      setCommentsIdArray(resp);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [storyId]);

  return (
    <>
      {!loading && commentsIds && (
        <CommentsCardContainer
          subUrl={ITEM_BASE_URL}
          commentsArray={commentsIds}
        />
      )}
    </>
  );
};

export default Comments;
