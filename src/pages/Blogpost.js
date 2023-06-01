import axios from "axios";
import { useState, useEffect } from "react";

export default function () {
  const [resultPost, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resolve) => {
        setPost(resolve.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div
      className="bg-dark text-light container mt-3 "
      style={{ marginBottom: "500px" }}
    >
      {resultPost
        .filter((val) => val.id === 1)
        .map((val) => {
          return (
            <div className="container p-4">
              <img
                src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid"
                
                alt=""
              />
              <h2>Blog Title: {val.title}</h2>
              <hr />
              <p>
                {val.body} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nam earum id eius iure consectetur voluptatem doloremque
                corrupti adipisci incidunt voluptatibus eum quo, cupiditate
                dolores mollitia consequatur! Aliquam officiis provident
                quibusdam.
              </p>
            </div>
          );
        })}
    </div>
  );
}
