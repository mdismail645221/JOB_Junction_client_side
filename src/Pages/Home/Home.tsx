import React from "react";
import NewsFeeds from "./NewsFeeds/NewsFeeds";
import StartingLoading from '../../Components/StartingLoading/StartingLoading.js'
import MyNetwork from '../MyNetwork/MyNetwork';
import UserPost from '../Home/UserPost/UserPost'

const Home = () => {
  return (
    <>
      {/* <MyNetwork></MyNetwork>
      <UserPost></UserPost> */}
      <NewsFeeds></NewsFeeds>
    </>
  );
};

export default Home;
