import * as React from "react";
import styled from "styled-components";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const TopResult = ({ podcast }) => {
  return (
    <SearchedCard to={`/podcast/${podcast?._id}`}>
      <PodcastImage src={podcast?.thumbnail} />
      <PodcastTitle>{podcast?.name}</PodcastTitle>
      <UploadInfo>
        <Time>• {podcast.views} Views</Time>
        <Time>• {format(podcast?.createdAt)}</Time>
        <CreatorName style={{ marginLeft: "18px" }}>
          {podcast?.creator.name}
        </CreatorName>
      </UploadInfo>
      <Description>{podcast?.desc}</Description>
    </SearchedCard>
  );
};

export default TopResult;
