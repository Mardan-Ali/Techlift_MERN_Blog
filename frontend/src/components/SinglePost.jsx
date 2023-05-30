import React, { useEffect, useState } from "react";
import "./singlepost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
export default function SinglePost() {
  // Use Location Hook to get the Path
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    try {
      const getPost = async () => {
        const res = await axios.get(`/posts/${path}`);
        console.log(res);
        setPost(res.data);
      };
      getPost();
    } catch (error) {
      console.log(error.Message);
    }
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span>
            <b className="singlePostAuthor">
              Author:
              <Link className="link" to={`/?user=${post.username}`}>
                <b>{post.username}</b>
              </Link>
            </b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
