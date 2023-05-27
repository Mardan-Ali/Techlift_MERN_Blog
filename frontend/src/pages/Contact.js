export default function Contact(){
    return (
        <div className="container mt-5 mb-5 ">
            
            <div className="row">
                <div className="col-md-7">
                <h3>Give your feedback</h3>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control form-control-lg" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Contact Number</label>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" className="form-control form-control-lg" id="phone" placeholder="123-456-789" />

                        {/* <input type="number" className="form-control" id="phone" placeholder="123-456-789" /> */}
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control form-control-lg" id="message" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-dark">Send</button>
                    </div>
                </div>
                <div className="col-md-5 bg-dark text-light fs-5">
                    <h4 className="m-3">Contact us</h4>
                    <hr Style="color:white"/>
                    <div className="mt-5">
                        <div className="d-flex">
                            <i className="bi bi-telephone-fill"></i>
                            <p className="ps-3">123-456-789</p>
                        </div>
                    <hr Style="color:white"/>
                        <div className="d-flex">
                            <i className="bi bi-envelope-at-fill"></i>
                            <p className="ps-3">support@blogsmania.pk</p>
                        </div>
                    <hr Style="color:white"/>

                        <div className="d-flex">
                            <i className="bi bi-browser-chrome"></i>
                            <p className="ps-3">www.blogsmania.pk</p>
                        </div>
                        <hr Style="color:white"/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}