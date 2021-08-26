import { combineReducers } from "redux";
import {
  CANDIDATE_SET_LIST,
  CANDIDATE_UPDATE_STEP,
  FILTER_SET_STEP,
  FILTER_SET_TEXT,
} from "./types";

export default combineReducers({
  candidates: (state = [], { type, payload }) => {
    switch (type) {
      case CANDIDATE_SET_LIST:
        return payload;
      case CANDIDATE_UPDATE_STEP:
        return state.map((candidate) =>
          candidate.id === payload.id ? payload : candidate
        );
    }

    return state;
  },
  steps: (state = []) => state,
  filter: (state = { text: "", step: "" }, { type, payload }) => {
    switch (type) {
      case FILTER_SET_TEXT:
        return {
          ...state,
          text: payload,
        };
      case FILTER_SET_STEP:
        return {
          ...state,
          step: payload,
        };
    }

    return state;
  },
});
