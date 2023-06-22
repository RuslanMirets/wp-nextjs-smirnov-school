import { create } from "zustand";

export const useRequestTimeStore = create((set) => ({
	value: 0,
	setTime: (value: number) => set({ value: value }),
}));
