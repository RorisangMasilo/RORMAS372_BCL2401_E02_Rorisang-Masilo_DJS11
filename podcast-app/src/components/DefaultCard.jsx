import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #4b7f12;
  border-radius: 0.6rem;
  padding: 1rem;
`;
const DefaultCardText = styled.div``;
const DefaultCardImg = styled.div``;

export const DefaultCard = () => {
  return (
    <Card>
      <DefaultCardText>Podcasts</DefaultCardText>
      <DefaultCardImg></DefaultCardImg>
    </Card>
  );
};
