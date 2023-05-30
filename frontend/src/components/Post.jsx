import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ posts }) {
  return (
    <div className="post">
      {posts.photo && <img className="postImg" src={posts.photo} />}

      <div className="postinfo">
        <div className="postCats">
          {posts.categories.map((c) => (
            <span className="postcat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${posts._id}`} className="link">
          <span className="postTitle">{posts.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(posts.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{posts.desc}</p>
    </div>
  );
}
