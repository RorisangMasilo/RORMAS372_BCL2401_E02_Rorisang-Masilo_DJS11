import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
`;
const Favourite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  position: relative;
`;
const FavouriteIcon = styled(IconButton)``;
const CardImage = styled.img``;
const Top = styled.div``;
const CardInfo = styled.div``;
const MainInfo = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const CreatorsInfo = styled.div``;
const Creator = styled.div``;
const CreatorName = styled.div``;
const Views = styled.div``;

const PodcastCard = () => {
  return (
    <Card>
      <Top>
        <Favourite>
          <FavoriteIcon></FavoriteIcon>
        </Favourite>
        <CardImage></CardImage>
      </Top>
      <CardInfo>
        <MainInfo>
          <Title></Title>
          <Description></Description>
          <CreatorsInfo>
            <Creator>
              <Avatar></Avatar>
              <CreatorName></CreatorName>
            </Creator>
            <Views></Views>
          </CreatorsInfo>
        </MainInfo>
      </CardInfo>
    </Card>
  );
};

export default PodcastCard;
