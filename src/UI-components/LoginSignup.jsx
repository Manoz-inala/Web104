import React from 'react';

function LoginSignup(props) {
    return (
        <div>
            <div className="container mt-3">

                <div className="row">
                    <div className="col-6">
                        <h1 className="h1" >Login</h1>
                        <form>
                                <div className="form-group"><input type="email" className="form-control" placeholder="Username/Email"></input></div>
                                <div className="form group"><input type="Password" className="form-control" placeholder="Password"></input></div>

                                <div className="mt-2"><button type="submit" className="btn btn-success ">Login</button></div>
                        </form>
                    </div>
                    <div className="col-6">
                        <h1 className="h1" >Signup</h1>
                        <form>
                            <div className="form-group"><input type="text" className="form-control" placeholder="Name"></input></div>
                            <div className="form-group"><input type="email" className="form-control" placeholder="Email"></input></div>
                            <div className="form-group"><input type="text" className="form-control" placeholder="username"></input></div>
                            <div className="form-group"><input type="number" className="form-control" placeholder="mobile"></input></div>
                            <div className="form group"><input type="Password" className="form-control" placeholder="Password"></input></div>
                            <div className="mt-2"><button type="submit" className="btn btn-warning ">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;