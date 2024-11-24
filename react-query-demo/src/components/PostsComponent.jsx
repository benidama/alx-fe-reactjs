import React from "react";
import { useState } from "react";

function PostsComponent() {
  const [query, useQuery] = useState("");

  const fetchData = () => {
    const fetchPosts = "https://jsonplaceholder.typicode.com/posts";
    const dataContainer = document.getElementById("api-data");
    useQuery, isLoading, isError, data, error, "fetchPosts";
    cacheTime, staleTime, refetchOnWindowFocus, keepPreviousData;
    if (isLoading) {
      return "fetched successfully";
    }

    if (isError) {
      return "failed to be fetched";
    }
  };
  return (
    <div>
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}

export default PostsComponent;
