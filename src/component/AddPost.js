import {
  FileImageOutlined,
  SmileOutlined,
  VideoCameraFilled,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./AddPost.css";
const AddPost = () => {
  return (
    <div className="addpost">
      <div className="addpost-top">
        <Avatar src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" />
        <input
          className="addpost-input"
          placeholder="What's on your mind, Rohit?"
        />
      </div>
      <div className="addpost-bottom">
        <div className="addpost-option">
          <VideoCameraFilled style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="addpost-option">
          <FileImageOutlined style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="addpost-option">
          <SmileOutlined style={{ color: "yellow" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
