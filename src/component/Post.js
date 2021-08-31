import React, { useState, useEffect } from "react";
import {
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import "./Post.css";
const Post = (props) => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch("https://612e2d8cd11e5c00175583e3.mockapi.io/Story")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPostData(data);
      });
  }, []);
  return (
    <>
      {postData.map((post) => {
        return (
          <div className="post">
            <div className="post-top">
              <Avatar size={40} src={post.image} className="post-avatar" />
              <div className="post-top-info">
                <h3 style={{ paddingTop: "10px" }}>{post.name}</h3>
                <p>5hr ago</p>
              </div>
            </div>
            <div className="post-bottom">
              <p>{post.message}</p>
            </div>
            <div className="post-image">
              <img src={post.bgImage} alt="postImg" />
            </div>

            <div className="post-options">
              <div className="post-option">
                <LikeOutlined />
                <p>Like</p>
              </div>
              <div className="post-option">
                <CommentOutlined />
                <p>Comment</p>
              </div>
              <div className="post-option">
                <ShareAltOutlined />
                <p>Share</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
