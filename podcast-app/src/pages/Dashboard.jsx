import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getMostPopularPodcast } from "../api/index";
import { getPodcastByCategory } from "../api";
import { PodcastCard } from "../components/PodcastCard.jsx";
import { getUsers } from "../api/index";
import { CircularProgress } from "@mui/material";

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const FilterContainer = styled.div`\
 display: flex;
flex-direction: column;
${({ box, theme }) =>
  box &&
  `
background-color: ${theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`}
background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const Span = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  color: ${({ theme }) => theme.primary};
  &:hover {
    transition: 0.2s ease-in-out;
  }
`;

const Podcasts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const DisplayNo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
`;

const Dashboard = ({ setSignInOpen }) => {
  const [mostPopular, setMostPopular] = useState([]);
  const [user, setUser] = useState();
  const [comedy, setComedy] = useState([]);
  const [news, setNews] = useState([]);
  const [sports, setsports] = useState([]);
  const [crime, setCrime] = useState([]);
  const [loading, setLoading] = useState(false);

  //user
  const { currentUser } = useSelector((state) => state.user);
  const token = localStorage.getItem("podstreamtoken");
  const getUser = async () => {
    await getUsers(token)
      .then((res) => {
        setUser(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const getPopularPodcast = async () => {
    await getMostPopularPodcast()
      .then((res) => {
        setMostPopular(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCommedyPodcasts = async () => {
    getPodcastByCategory("comedy")
      .then((res) => {
        setComedy(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getNewsPodcasts = async () => {
    getPodcastByCategory("news")
      .then((res) => {
        setNews(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getSportsPodcasts = async () => {
    getPodcastByCategory("sports")
      .then((res) => {
        setsports(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getCrimePodcasts = async () => {
    getPodcastByCategory("crime")
      .then((res) => {
        setCrime(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getallData = async () => {
    setLoading(true);
    if (currentUser) {
      setLoading(true);
      await getUser();
    }
    await getPopularPodcast();
    await getCommedyPodcasts();
    await getNewsPodcasts();
    await getCommedyPodcasts();
    await getCrimePodcasts();
    await getSportsPodcasts();
    setLoading(false);
  };

  useEffect(() => {
    getallData();
  }, [currentUser]);

  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link
            to={`/showpodcast/mostpopular`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard></PodcastCard>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          COmedy
          <Link to={`/showpodcast/comedy`} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>Hi</Podcasts>
      </FilterContainer>
    </DashboardMain>
  );
};
export default Dashboard;
