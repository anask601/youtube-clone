import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategories,
} from "../../redux/actions/videos.action";
import Video from "../../components/video/Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

import "react-loading-skeleton/dist/skeleton.css";
import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategories(activeCategory));
    }
  };

  return (
    <div>
      <Container>
        <CategoriesBar />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="mx-auto spinner-border text-danger d-block"></div>
          }
          className="row"
        >
          {!loading
            ? videos.map((video, i) => (
                <Col lg={3} md={4} key={i}>
                  <Video video={video} />
                </Col>
              ))
            : [...Array(20)].map((video, i) => (
                <Col lg={3} md={4} key={i}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default HomeScreen;
