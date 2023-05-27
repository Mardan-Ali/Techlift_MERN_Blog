


export default function Signup(){
    return (
        <div className="container   ">
            
        <div className="row align-items-center d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 m-5 border ">
            <div className="my-4">
            <h3>Sign Up</h3>
            </div>
                <div className="mb-4">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" required/>
                </div>
                <div className="mb-4">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control form-control-lg" id="email" placeholder="name@example.com" required/>
                </div>
                <div className="mb-4">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter your password" required  />
                </div>
                <div className="mb-4">
                    <label for="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" placeholder="Confirm your password" required  />
                </div>
                
                <div className="mb-4">
                    <button className="btn btn-dark">Sign Up</button>
                </div>
            </div>
            
        </div>
    </div>
    );
}