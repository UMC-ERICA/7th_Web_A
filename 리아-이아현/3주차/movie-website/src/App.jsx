import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MoviesPage from "./pages/MoviesPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movies/now-playing",
        element: <NowPlayingPage />,
      },
      {
        path: "movies/popular",
        element: <PopularPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
