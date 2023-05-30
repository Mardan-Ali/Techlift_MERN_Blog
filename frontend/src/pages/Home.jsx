import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await axios.get("/posts" + search);
        // console.log(response.data);
        setPosts(response.data);
      };
      getPosts();
    } catch (error) {
      console.log(error.Message);
    }
  }, [search]);

  // console.log(posts);
  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
