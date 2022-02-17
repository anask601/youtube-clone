import * as actionTypes from "../actionType";
import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.HOME_VIDEOS_REQUEST,
    });

    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: actionTypes.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: actionTypes.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
export const getVideosByCategories =
  (keywords) => async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.HOME_VIDEOS_REQUEST,
      });

      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          q: keywords,
          type: "video",
        },
      });

      dispatch({
        type: actionTypes.HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: keywords,
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: actionTypes.HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };
