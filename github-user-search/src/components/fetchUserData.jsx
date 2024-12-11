import React from "react";

const fetchUserData = () => {
  const fetchPosts = "https://api.github.com/users/{username}";
  const dataContainer = document.getElementById("api-data");
  useQuery, isLoading, isError, data, error, "fetchPosts";
  cacheTime, staleTime, refetchOnWindowFocus, keepPreviousData;
  if (isLoading) {
    return "fetched successfully";
  }

  if (isError) {
    return "failed to be fetched";
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
};

export default fetchUserData;
