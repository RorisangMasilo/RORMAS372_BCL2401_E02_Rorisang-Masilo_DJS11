import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  getMostPopularPodcast,
  getUsers,
  getPodcastByCategory,
} from "../api/index";
import { PodcastCard } from "../components/PodcastCard";
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

const FilterContainer = styled.div`
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
  const [sports, setSports] = useState([]);
  const [crime, setCrime] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const token = localStorage.getItem("podstreamtoken");

  const getUser = async () => {
    try {
      const res = await getUsers(token);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularPodcast = async () => {
    try {
      const res = await getMostPopularPodcast();
      setMostPopular(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComedyPodcasts = async () => {
    try {
      const res = await getPodcastByCategory("comedy");
      setComedy(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewsPodcasts = async () => {
    try {
      const res = await getPodcastByCategory("news");
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSportsPodcasts = async () => {
    try {
      const res = await getPodcastByCategory("sports");
      setSports(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCrimePodcasts = async () => {
    try {
      const res = await getPodcastByCategory("crime");
      setCrime(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllData = useCallback(async () => {
    setLoading(true);
    try {
      if (currentUser) {
        await getUser();
      }
      await Promise.all([
        getPopularPodcast(),
        getComedyPodcasts(),
        getNewsPodcasts(),
        getCrimePodcasts(),
        getSportsPodcasts(),
      ]);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    getAllData();
  }, [getAllData, currentUser]);

  return (
    <DashboardMain>
      {loading ? (
        <Loader>
          <CircularProgress />
        </Loader>
      ) : (
        <>
          {currentUser && user?.podcasts?.length > 0 && (
            <FilterContainer box={true}>
              <Topic>
                Your Uploads
                <Link to={`/profile`} style={{ textDecoration: "none" }}>
                  <Span>Show All</Span>
                </Link>
              </Topic>
              <Podcasts>
                {user?.podcasts.slice(0, 10).map((podcast) => (
                  <PodcastCard
                    key={podcast.id}
                    podcast={podcast}
                    user={user}
                    setSignInOpen={setSignInOpen}
                  />
                ))}
              </Podcasts>
            </FilterContainer>
          )}
          <FilterContainer>
            <Topic>
              Most Popular
              <Link
                to={`/showpodcasts/mostpopular`}
                style={{ textDecoration: "none" }}
              >
                <Span>Show All</Span>
              </Link>
            </Topic>
            <Podcasts>
              {mostPopular.slice(0, 10).map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  user={user}
                  setSignInOpen={setSignInOpen}
                />
              ))}
            </Podcasts>
          </FilterContainer>
          <FilterContainer>
            <Topic>
              Comedy
              <Link
                to={`/showpodcasts/comedy`}
                style={{ textDecoration: "none" }}
              >
                <Span>Show All</Span>
              </Link>
            </Topic>
            <Podcasts>
              {comedy.slice(0, 10).map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  user={user}
                  setSignInOpen={setSignInOpen}
                />
              ))}
            </Podcasts>
          </FilterContainer>
          <FilterContainer>
            <Link to={`/showpodcasts/news`} style={{ textDecoration: "none" }}>
              <Topic>
                News
                <Span>Show All</Span>
              </Topic>
            </Link>
            <Podcasts>
              {news.slice(0, 10).map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  user={user}
                  setSignInOpen={setSignInOpen}
                />
              ))}
            </Podcasts>
          </FilterContainer>
          <FilterContainer>
            <Link to={`/showpodcasts/crime`} style={{ textDecoration: "none" }}>
              <Topic>
                Crime
                <Span>Show All</Span>
              </Topic>
            </Link>
            <Podcasts>
              {crime.slice(0, 10).map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  user={user}
                  setSignInOpen={setSignInOpen}
                />
              ))}
            </Podcasts>
          </FilterContainer>
          <FilterContainer>
            <Link
              to={`/showpodcasts/sports`}
              style={{ textDecoration: "none" }}
            >
              <Topic>
                Sports
                <Span>Show All</Span>
              </Topic>
            </Link>
            <Podcasts>
              {sports.slice(0, 10).map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  podcast={podcast}
                  user={user}
                  setSignInOpen={setSignInOpen}
                />
              ))}
            </Podcasts>
          </FilterContainer>
        </>
      )}
    </DashboardMain>
  );
};

export default Dashboard;
