import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./contexts/DarkModeContext";

import GlobalStyles from "./styles/GlobalStyles";
import "./styles/styles.scss";

import Homepage from "./pages/Homepage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./ui/auth/ProtectedRoute";
import AppLayout from "./pages/AppLayout";

import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";

import { App_Url } from "./utils/constants";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
// import Services from "./pages/Services";
import Book from "./pages/Book";
// import ServiceCom from "./ui/services/ServiceCom";
// import BlogComView from "./ui/blogs/BlogComView";

import ScrollToTop from "./hooks/ScrollToTop";
import Service from "./ui/services/Service";
import Blog from "./ui/blogs/Blog";
import Admins from "./ui/admins/Admins";
import Admin from "./ui/admins/Admin";
import Edit from "./ui/error/Edit";
import AppHome from "./pages/app/AppHome";
import AppBlogs from "./pages/app/AppBlogs";
import AppServices from "./pages/app/AppServices";
import AppBook from "./pages/app/AppBook";
import AppComponents from "./pages/app/AppComponents";
import AppIconsNumber from "./pages/app/AppIconsNumber";
import AppAboutUs from "./pages/app/AppAboutUs";
import AppDoctors from "./pages/app/AppDoctors";
import AppReviews from "./pages/app/AppReviews";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <>
            <DarkModeProvider>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />

                    <GlobalStyles />

                    <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                            <Route
                                // path="app"
                                element={
                                    <ProtectedRoute>
                                        <AppLayout />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <Navigate
                                            replace
                                            to={`${App_Url}/home`}
                                        />
                                    }
                                />
                                <Route exact path="/app" component={App} />
                                <Route
                                    path={`${App_Url}/home`}
                                    element={<AppHome />}
                                />
                                <Route
                                    path={`${App_Url}/blogs`}
                                    element={<AppBlogs />}
                                />
                                <Route
                                    path={`${App_Url}/services`}
                                    element={<AppServices />}
                                />
                                <Route
                                    path={`${App_Url}/book`}
                                    element={<AppBook />}
                                />
                                <Route
                                    path={`${App_Url}/components`}
                                    element={<AppComponents />}
                                />
                                <Route
                                    path={`${App_Url}/landing`}
                                    element={<AppBlogs />}
                                />
                                <Route
                                    path={`${App_Url}/iconsnumber`}
                                    element={<AppIconsNumber />}
                                />
                                <Route
                                    path={`${App_Url}/aboutus`}
                                    element={<AppAboutUs />}
                                />
                                <Route
                                    path={`${App_Url}/doctors`}
                                    element={<AppDoctors />}
                                />
                                <Route
                                    path={`${App_Url}/reviews`}
                                    element={<AppReviews />}
                                />

                                <Route
                                    path={`${App_Url}/account`}
                                    element={<Account />}
                                />
                            </Route>

                            <Route path="/home" element={<Homepage />} />

                            <Route
                                path={`/services/:serviceId`}
                                element={<Service />}
                            />

                            <Route path="/book" element={<Book />} />

                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/blogs/:blogId" element={<Blog />} />

                            <Route path="/aboutus" element={<AboutUs />} />

                            <Route path="/admins" element={<Admins />} />
                            <Route
                                path="/admins/:adminId"
                                element={<Admin />}
                            />

                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route
                                path="resetpassword"
                                element={<ResetPassword />}
                            />

                            <Route path="/edit" element={<Edit />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>

                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{ margin: "8px" }}
                        toastOptions={{
                            success: {
                                duration: 5000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                fontSize: "16px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                // backgroundColor: "var(--color-grey-0)",
                                color: "var(--color-grey-700)",
                                //  backgroundColor: "var(--back-sec-1)",
                                backgroundColor: "var(--back-box)",
                                boxShadow: "var(--box-shadow)",
                                border: "var(--border)",
                                borderRadius: "var(--border-radius-md)",
                            },
                        }}
                    />
                </QueryClientProvider>
            </DarkModeProvider>
        </>
    );
}

export default App;
