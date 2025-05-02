import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import Layout from "../pages/layout";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

const App = () => {
    const { authUser, isCheckingAuth, checkAuth }: any = useAuthStore();

    // Runs the function once, and then runs again when the checkAuth function changes (probably never)
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Loading screen while the system checks if the user is authenticated or not
    if (isCheckingAuth && !authUser)
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
            </div>
        );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            authUser ? <HomePage /> : <Navigate to="/login" />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            !authUser ? <SignupPage /> : <Navigate to="/" />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            !authUser ? <LoginPage /> : <Navigate to="/" />
                        }
                    />
                    {/*
                <Route path="/settings" element={<SettingsPage />} />
                <Route
                    path="/profile"
                    element={
                        authUser ? <ProfilePage /> : <Navigate to="/login" />
                    }
                />
                */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
