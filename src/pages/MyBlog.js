import React from "react";
import Card from "../components/Card";

export default function MyBlog() {
  return (
    <div className="container">
      <div className="row m-3">
        <div className="col-12">
          <h3>My Blogs</h3>
          <hr />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 1"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 2"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 3"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 4"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 5"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 6"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 7"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Card
            title="News 8"
            src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
      </div>
    </div>
  );
}
