import axios from "axios";
import { Link } from "react-router-dom";

export default function Card(props){
    return (
        <div className="card mb-2" >
            <img src={props.src} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="btn btn-dark">Read Full Article</a> */}
                <Link to="/post" className="btn btn-dark">Read Full Article</Link>
            </div>
        </div>
    );
}