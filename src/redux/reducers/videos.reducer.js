import * as actionTypes from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,

        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case actionTypes.HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case actionTypes.HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
