import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Genre from './pages/genre';
// import Series from "./pages/series";
import Movie from "./pages/movie";
import NotFound from "./pages/notFound";

const msRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movies",
        element: <Movies />,
    },
    // {
    //     path: "/series",
    //     element: <Series />,
    // },
    // {
    //     path: "/blog",
    //     element: <Blog />,
    // },
    // {
    //     path: "/signIn",
    //     element: <SignIn />,
    // },
    {
        path: "/movies/:id",
        element: <Movie />,
    },
    {
        path: "/genres/:genreId",
        element: <Genre />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default function MyRouter() {
    return (
        <RouterProvider router={msRouter} />
    )
}