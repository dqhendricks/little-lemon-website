import { fetchAPI } from "../../services/api.js";

export function updateTimes(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_DATE":
      return fetchAPI(payload);
    default:
      return state;
  }
}

export function initializeTimes() {
  const response = fetchAPI(new Date());
  return response;
}
