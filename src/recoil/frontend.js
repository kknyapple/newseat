import { atom } from "recoil";

export const modeState = atom({
  key: "mode",
  default: 1, // 1: paperMode, 2: videoMode
});

export const categoryState = atom({
  key: "category",
  default: "전체",
});

export const selectedVideoState = atom({
  key: "selectedVideo",
  default: null,
});

export const videoListState = atom({
  key: "videoList",
  default: null,
});
