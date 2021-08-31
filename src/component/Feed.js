import React from "react";
import AddPost from "./AddPost";
import "./Feed.css";
import Post from "./Post";
import Stories from "./Stories";
const Feed = () => {
  return (
    <div className="feed">
      <Stories />
      <AddPost />
      <Post />
    </div>
  );
};

export default Feed;
