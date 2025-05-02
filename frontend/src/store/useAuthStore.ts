import { create, StoreApi, UseBoundStore } from "zustand";
import { api } from "../lib/axios";
import { AuthStore } from "../types";
import toast from "react-hot-toast";


export const useAuthStore: UseBoundStore<StoreApi<AuthStore>> = create(
    (set, get) => ({
        authUser: null,
        isSigningUp: false,
        isLoggingIn: false,
        isUpdatingProfile: false,
        isCheckingAuth: true,
        onlineUsers: [],
        socket: null,

        checkAuth: async () => {
            set({ isCheckingAuth: false });
            return;

            try {
                set({ isCheckingAuth: true });

                const checkResponse = await api.get("/auth/check");

                if (checkResponse.status === 200 && get().authUser !== null)
                    return;
                
                const imageResponse = await api.get(
                    "/auth/profile-pic"
                );

                checkResponse.data.profilePic = imageResponse.data.profilePic;

                set({ authUser: checkResponse.data });
            } catch (error: any) {
                console.log("Error in checkAuth:", error.message);
                set({ authUser: null });
            } finally {
                set({ isCheckingAuth: false });
            }
        },

        signup: async (data) => {
            try {
                set({ isSigningUp: true });

                const response = await api.post("/auth/signup", data);

                set({ authUser: response.data });

                toast.success("Account created successfully");
            } catch (error: any) {
                toast.error(error.response.data.message);
            } finally {
                set({ isSigningUp: false });
            }
        },

        logout: async () => {
            try {
                await api.post("/auth/logout");
                set({ authUser: null });
                toast.success("Logged out successfully");
            } catch (error: any) {
                toast.error(error.response.data.message);
            }
        },

        login: async (data) => {
            try {
                set({ isLoggingIn: true });

                const response = await api.post("/auth/login", data);

                set({ authUser: response.data });

                toast.success("Logged In Successfully");
            } catch (error: any) {
                toast.error(error.response.data.message);
            } finally {
                set({ isLoggingIn: false });
            }
        },

        updateProfile: async (data) => {
            try {
                set({ isUpdatingProfile: true });

                const response = await api.put(
                    "/auth/update-profile",
                    data
                );

                set({ authUser: response.data });

                toast.success("Profile updated Successfully");

                return response.data;
            } catch (error: any) {
                toast.error(error.response.data.message);
            } finally {
                set({ isUpdatingProfile: false });
            }
        }
    })
);
