import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Edit() {
  const [inputs, setInput] = useState({
    title: "",
    cat: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resolve) => {
        let result = resolve.data.find((val) => val.id == 1);
        setInput({
          title: result.title,
          cat: "sports",
          description: result.body,
          image: result.id,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  console.log(inputs);
  const changeHandler = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("a");
  };
  return (
    <>
      <div className="container   ">
        <div className="row  d-flex justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 m-5 border">
            <div className="my-4 justify-content-center">
              <h3>Edit Blog</h3>
            </div>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label for="title" className="form-label">
                  Blog Title
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  name="title"
                  // placeholder="Blog Title"
                  value={inputs.title}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div>
                <label for="cat" class="form-label">
                  Select Categary (select one):
                </label>
                <select
                  class="form-select"
                  id="cat"
                  name="cat"
                  value={inputs.cat}
                  onChange={changeHandler}
                >
                  <option value={""}>Slect one option</option>
                  <option value={"news"}>News</option>
                  <option value={"sports"}>Sports</option>
                  <option value={"technology"}>Technology</option>
                </select>
              </div>
              <div className="mb-4">
                <label for="description" className="form-label">
                  Description
                </label>
                <textarea
                  type="textarea"
                  className="form-control form-control-lg"
                  id="description"
                  name="description"
                  value={inputs.description}
                  onChange={changeHandler}
                  placeholder="Wriite Blog Description"
                  required
                />
              </div>
              <div className="mb-4">
                <label for="image" className="form-label">
                  Image Url
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="image"
                  name="image"
                  value={inputs.image}
                  onChange={changeHandler}
                  placeholder="Paste url here"
                  required
                />
              </div>

              <div className="mb-4">
                <button className="btn btn-dark" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
