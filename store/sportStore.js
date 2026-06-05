import { create } from "zustand";
import { api } from "../services/api";
export const useSportStore = create((set) => ({
  sports: [],
  getSports: async () => {
    try {
      const response = await api.get("/sports");
      set({
        sports: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));