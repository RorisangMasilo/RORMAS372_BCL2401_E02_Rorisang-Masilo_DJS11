import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openPlayer: false,
  type: "audio",
  episode: null,
  podId: null,
  currentTime: 0,
  index: 0,
};

const audioPlayer = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    openPlayer: (state, action) => {
      state.openPlayer = true;
      state.type = action.payload.type;
      state.episode = action.payload.episode;
      state.podId = action.payload.podId;
      state.currentTime = action.payload.currentTime;
      state.index = action.payload.index;
    },
    closePlayer: (state) => {
      state.openPlayer = false;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload.currentTime;
    },
  },
});

export const { openPlayer, closePlayer, setCurrentTime } = audioPlayer.actions;

export default audioPlayer.reducer;

// The following ESLint comment should reference 'audioPlayer' correctly
/* eslint-disable no-undef */
