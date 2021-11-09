import createDataContext from "./createDataContext";

const locationReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
  dispatch({ type: "add_location", payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);