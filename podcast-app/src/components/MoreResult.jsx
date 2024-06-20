import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const MoreResult = ({ podcast }) => {
  return (
    <Results to={`/podcast/${podcast?._id}`} style={{ textDecoration: "none" }}>
      <PodcastImage src={podcast?.thumbnail} />
      <PodcastInfo>
        <PodcastName>{podcast?.name}</PodcastName>
        <Description>
          <Creator style={{ marginRight: "12px" }}>
            {podcast?.creator.name}
          </Creator>
          <Time>• {podcast?.views} Views</Time>
          <Time>• {format(podcast?.createdAt)}</Time>
        </Description>
      </PodcastInfo>
    </Results>
  );
};

export default MoreResult;
