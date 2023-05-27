


export default function Login(){
    return (
        <div className="container   ">
            
            <div className="row  d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12 m-5 border">
                <div className="my-4">
                <h3>Sign In</h3>
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
                        <button className="btn btn-dark">Log In</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}