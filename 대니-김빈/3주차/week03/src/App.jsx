import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import MoviesPage from "./pages/moviepage";
import MovieCategoryPage from "./pages/moviecategory";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import RootLayout from "./root-layout";




const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,
      errorElement: <SearchPage/>,
      // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
      children: [
          {
              // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
              index: true,
              element: <HomePage/>
          },
          {
              // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
              path: 'movies',
              element: <MovieCategoryPage/>
          },
          {
            path: 'login',
            element: <LoginPage/>
        },
        {
          path: 'signup',
          element: <SignUpPage/>
      },
      {
        path: 'search',
        element: <SearchPage/>
      }
      ]
  },

])

function App() {
  return <RouterProvider router={router}/>
}

export default App