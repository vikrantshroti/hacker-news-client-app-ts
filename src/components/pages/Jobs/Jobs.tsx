import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../organisms/NewsCardContainer";
import { useLocation } from "react-router-dom";
import { ITEM_BASE_URL, jobsGetApi, getPageFromParams } from "../../../utils";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  const [storyIds, setStoryIds] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const storyIndex = (currentPage - 1) * 30;
  const location = useLocation();

  useEffect(() => {
    const subscription = jobsGetApi().subscribe((resp) => {
      setStoryIds(resp);
      setLoading(false);
      setPageCount(Math.ceil(resp.length / 30));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    let query = getPageFromParams(location.search, "p");
    let storyArray = storyIds.slice((query - 1) * 30, query * 30);
    setCurrentPage(query);
    storyArray.length > 0 && setNewArray(storyArray);
    setLoading(false);
  }, [storyIds, location.search]);

  return (
    <>
      {!loading && (
        <NewsCardContainer
          subUrl={ITEM_BASE_URL}
          newsArray={newArray}
          indexStart={storyIndex}
          nextPageQuery={`/jobs?p=${currentPage ? currentPage + 1 : 2}`}
          isNextPage={currentPage < pageCount}
          type="jobs"
        />
      )}
    </>
  );
};

export default Jobs;
