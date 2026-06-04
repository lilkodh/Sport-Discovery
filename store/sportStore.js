import { create } from "zustand";
import { getSports } from "../services/api";

export const useSportStore = create((set) => ({
  sports: [],
  loading: false,
  fetchSports: async () => {
    set({ loading: true });

    try {
      const data = await getSports();

      set({
        sports: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);

      set({
        loading: false,
      });
    }
  },
}));