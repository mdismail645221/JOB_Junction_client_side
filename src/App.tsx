import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
// import "./App.css";+
// import Main from "./layouts/Main/Main";
// import Header from "./Pages/Home/Header/Header";
// import Home from "./Pages/Home/Home";
// import Jobs from "./Pages/Jobs/Jobs";
// import Messaging from "./Pages/Messaging/Messaging";
// import MyNetwork from "./Pages/MyNetwork/MyNetwork";
// import MyProfile from "./Pages/MyProfile/MyProfile";
// import SignIn from "./Pages/SignIn/SignIn";
// import SignUp from "./Pages/SignUp/SignUp";
import { router } from "./routes/Router";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";

function App() {
  return <RouterProvider router={router} />
}

export default App;

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Main />}>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/my-network" element={<MyNetwork />}></Route>
//       <Route path="/jobs" element={<Jobs />}></Route>
//       <Route path="/my-profile" element={<MyProfile />}></Route>
//       <Route path="/signin" element={<SignIn />}></Route>
//       <Route path="/signup" element={<SignUp />}></Route>
//       <Route path="/messaging" element={<Messaging />}></Route>
//     </Route>
//   </Routes>
// </BrowserRouter>
