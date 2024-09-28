import { create } from "zustand";

interface MediaStore {
  media: "series" | "movies";
  update: () => void;
}

export const useMediaStore = create<MediaStore>((set) => ({
  media: "series",
  update: () =>
    set((state) => ({
      media: state.media === "series" ? "movies" : "series",
    })),
}));
