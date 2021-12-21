import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../organisms/NewsCardContainer";
import { useLocation } from "react-router-dom";
import { ITEM_BASE_URL, askGetApi, getPageFromParams } from "../../../utils";

const Ask = () => {
  const [loading, setLoading] = useState(true);
  const [storyIds, setStoryIds] = useState([]);
  const [newsArray, setNewsArray] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);
  const storyIndex = (currentPage - 1) * 30;
  const location = useLocation();

  useEffect(() => {
    const subscription = askGetApi().subscribe((response) => {
      setStoryIds(response);
      setLoading(false);
      setPageCount(Math.ceil(response.length / 30));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    let query = getPageFromParams(location.search, "p");
    let storyArray = storyIds.slice((query - 1) * 30, query * 30);
    setCurrentpage(query);
    storyArray.length > 0 && setNewsArray(storyArray);
    setLoading(false);
  }, [storyIds, location.search]);

  return (
    <>
      {!loading && (
        <NewsCardContainer
          subUrl={ITEM_BASE_URL}
          newsArray={newsArray}
          indexStart={storyIndex}
          nextPageQuery={`/ask?p=${currentPage ? currentPage + 1 : 2}`}
          isNextPage={currentPage < pageCount}
          type="news"
        />
      )}
    </>
  );
};

export default Ask;
