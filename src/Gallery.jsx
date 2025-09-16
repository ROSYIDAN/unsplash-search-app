import React from "react";
import { useFetchImage, useSearchImage } from "./QueryCustomHooks";

export const Gallery = () => {
  // const { data, isError, isLoading } = useFetchImage();
  const { data, isError, isLoading, isFetching } = useSearchImage();

  if (!isFetching) {
    return <></>;
  }
  if (isLoading) {
    return <p className="loading"></p>;
  }
  if (!data || !data.results) return <p>No results yet...</p>;
  return (
    <div className="image-container">
      {data.results?.map((image, index) => {
        const { id, alt_description, urls } = image;
        return (
          <img
            src={urls.small}
            alt={alt_description}
            key={`${id}-${index}`}
            className="img"
          />
        );
      })}
    </div>
  );
};
