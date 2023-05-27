import Card from "../components/Card";
import Header1 from "../components/header1";
import {Link} from "react-router-dom"
export default function Home(){
    return (
        <div>
            <Header1/>
            <div className="row m-3">
                <div className="col-12"><h3>News</h3><hr /></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card title="News 1" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card title="News 2" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" /></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card title="News 3" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
                <div className="col-12 "><Link to="/news" className="btn btn-dark">See all news blogs</Link><hr /></div>
            </div>
            <div className="row m-3">    
            <div className="col-12"><h3>Sports</h3><hr /></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card title="Sports 4" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" /></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card  title="Sports 5" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card  title="Sports 6" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
                <div className="col-12 "><Link to="/sports" className="btn btn-dark">See all Sports blogs</Link ><hr /></div>
            </div> 
            <div className="row m-3"> 
            <div className="col-12"><h3>Technology</h3><hr /></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card title="Technology 7" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><Card  title="Technology 8" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
               <div className="col-lg-4 col-md-6 col-sm-12"><Card title="Technology 9" src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
               <div className="col-12 "><Link to="/technology" className="btn btn-dark">See all Technology blogs</Link ><hr /></div>
            </div>   
        </div>
    );
}