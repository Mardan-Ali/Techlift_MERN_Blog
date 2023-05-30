import React, { useState, useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    try {
      const getCats = async () => {
        const res = await axios.get("/categories");
        // console.log(res.data);
        setCats(res.data);
      };
      getCats();
    } catch (error) {
      console.log(error.Message);
    }
  }, []);
  // console.log(cats);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About ME</span>
        <img
          src="https://media.istockphoto.com/id/1020408818/photo/city-map-with-pin-pointers-3d-rendering-image.jpg?s=1024x1024&w=is&k=20&c=Hqqp0PzVDV8pQqVNJ-0w__42MP7HrNq1wrMf4K8os2Q="
          alt=""
        />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <Link key={index} to={`/?cat=${c.name}`} className="link">
              <li key={index} className="sidebarListItem">
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebar-icons fa-brands fa-square-facebook"></i>
          <i className="sidebar-icons fa-brands fa-square-twitter"></i>
          <i className="sidebar-icons fa-brands fa-square-pinterest"></i>
          <i className="sidebar-icons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
