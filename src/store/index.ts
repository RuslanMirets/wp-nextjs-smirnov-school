import { create } from "zustand";

export const useRenderTimeStore = create((set) => ({
	value: 0,
	setTime: (value: number) => set({ value: value }),
}));
