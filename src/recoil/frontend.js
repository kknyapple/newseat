import { atom } from "recoil";

export const modeState = atom({
  key: "mode",
  default: 1, // 1: paperMode, 2: videoMode
});

export const categoryState = atom({
  key: "category",
  default: "전체",
});
