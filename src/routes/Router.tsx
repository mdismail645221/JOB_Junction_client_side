import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../layouts/Main/Main";
import Feed from "../Pages/Feed/Feed";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import Messaging from "../Pages/Messaging/Messaging";
import MyNetwork from "../Pages/MyNetwork/MyNetwork";
import MyProfile from "../Pages/MyProfile/MyProfile";
import MyProfileMain from "../Pages/MyProfile/MyProfileMain/MyProfileMain";
import MyResume from "../Pages/MyProfile/MyResume/MyResume";
import PostAJob from "../Pages/PostAJob/PostAJob";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

//  don't touch this file anymore
//  don't touch this file anymore
//  don't touch this file anymore
//  don't touch this file anymore
//  don't touch this file anymore
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/my-network",
        element: <MyNetwork />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
        children: [
          {
            path: "/my-profile",
            element: <MyProfileMain />,
          },
          {
            path: "/my-profile/my-resume",
            element: <MyResume />,
          },
        ],
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/messaging",
        element: <Messaging />,
      },
      {
        path: "/jobs/post-a-job",
        element: <PostAJob />,
      },
    ],
  },
]);

// <Route path="/" element={<Main />}>
// <Route path="/" element={<Home />}></Route>
// <Route path="/my-network" element={<MyNetwork />}></Route>
// <Route path="/jobs" element={<Jobs />}></Route>
// <Route path="/my-profile" element={<MyProfile />}></Route>
// <Route path="/signin" element={<SignIn />}></Route>
// <Route path="/signup" element={<SignUp />}></Route>
// <Route path="/messaging" element={<Messaging />}></Route>
// </Route>
