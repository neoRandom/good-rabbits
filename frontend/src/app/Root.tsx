import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import MainLayout from "../pages/layouts/MainLayout";
import AppLayout from "../pages/layouts/AppLayout";
import HomePage from "../pages/app/HomePage";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import GoalsPage from "../pages/app/GoalsPage";
import Error404 from "../pages/Error404";
import Load from "../pages/Load";
import PrizePage from "../pages/app/PrizesPage";
import UserProfilePage from "../pages/app/UserProfilePage";
import EditProfilePage from "../pages/app/EditProfilePage";

const Root = () => {
    const { authUser, isCheckingAuth, checkAuth }: any = useAuthStore();

    // Runs the function once, and then runs again when the checkAuth function changes (probably never)
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Loading screen while the system checks if the user is authenticated or not
    if (isCheckingAuth && !authUser)
        return (
            <Load />
        );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {/* Redirect on root */}
                    <Route index element={<Navigate to="/app" />} />

                    {/* Auth Routes */}
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />

                    {/* App Routes */}
                    <Route path="/app" element={<AppLayout />}>
                        <Route
                            index
                            element={
                                authUser || true ? (
                                    <HomePage />
                                ) : (
                                    <Navigate to="/login" />
                                )
                            }
                        />
                        <Route
                            path="/app/goals"
                            element={
                                !authUser ? <GoalsPage /> : <Navigate to="/login" />
                            }
                        />   
                        <Route
                            path="/app/prizes"
                            element={
                                !authUser ? <PrizePage /> : <Navigate to="/login" />
                            }
                        />   
                        
                    <Route
                            path="/app/profile"
                            element={
                                !authUser ? <UserProfilePage /> : <Navigate to="/login" />
                            }
                        />   
                    <Route
                            path="/app/editprofile"
                            element={
                                !authUser ? <EditProfilePage /> : <Navigate to="/login" />
                            }
                        />   
                    </Route>

                    {/* 404 Handler; TODO: 404 page */}
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
