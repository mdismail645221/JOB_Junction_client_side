import React from "react";
import DefaultHomePage from "./DefaultHomePage/DefaultHomePage";

const Home = () => {
  return <DefaultHomePage />;
};

export default Home;

/*
database name: users
    collection name: usersInfo
        usersInfo: {
          _id" "unique Id provided by firebase"
          uid: "unique Id"
          name: "users name",
          title: "users title"
          bio: "users bio"
          email: "users email",
          profilePhotoURL: "users photo",
          coverPhotoURL: "users photo",
          phone: "users phone",
          aboutMe: "users about",
          connections:{
            allFriends: [
              {
                friendEmail: "friend email",
              },
            ]
            sendConnections:{
              senderEmail: "my email",
              recieverEmail: "reciever email",
              connectionStatus: "pending/removed/accepted"
            }
            recievedConnections:{
              senderEmail: "sender email",
              recieverEmail: "my email",
              connectionStatus: "pending/removed/accepted"
            }
          }

        }

database name: Posts
    collection name: jobPosts
        jobPost: {
          _id: "unique ID",
          userEmail: "user email",
          jobDescription: "post description",
          postDate: "post date",
          questions: arrayOfQuestion[]
          allLikes: "array of email who liked this post[],
        }
    collection name: jobPostComments
        jobPostComments:{
          _id: "unique ID",
          postID: "postID",
          comment: "comments",
          commentDate: "comment date",
          userEmail: "user email who has commented",
        }
    collection name: timelinePosts
        timelinePosts{
          _id: "unique ID",
          userEmail: "user email",
          userName: "user name",
          title: "users title"
          profilePhotoURL: "userPhoto Link"
          postDescription: "post description",
          postImage?: "post image
          postDate: "post date",
          allLikes: "array of email who liked this post[],
        }
        collection name: postComments
          postComments:{
            _id: "unique ID",
            postID: "postID",
            comment: "comments",
            commentDate: "comment date",
            userEmail: "user email who has commented",
          }
    collection name: timelinePostsAdditionalInfo(like and comments)

    database name: connections
    collection name: connectionRequestInfo
*/
