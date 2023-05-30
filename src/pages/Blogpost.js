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
    <div className="bg-primary container mt-3 mb-5">
      {resultPost
        .filter((val) => val.id === 1)
        .map((val) => {
          return (
            <div className="container">
              <h3>{val.title}</h3>
              <hr />
              <p>{val.body}</p>
            </div>
          );
        })}
    </div>
  );
}
