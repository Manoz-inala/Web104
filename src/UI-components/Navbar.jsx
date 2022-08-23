import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
         <>  <nav className="navbar navbar-dark bg-dark navbar-expand-lg text-white ">
             <Link to="#" className="navbar-brand">Project</Link>
             <div className="ml-auto">
                 <ul className="navbar-nav">
                     <li className="navbar-list" ><Link to="/Home" className="nav-link">Home</Link></li>
                     <li className="navbar-list" ><Link to="/Contact-app" className="nav-link">Contact-App</Link></li>
                     <li className="navbar-list" ><Link to="/Players-info" className="nav-link">Playersinfo</Link></li>
                     <li className="navbar-list" ><Link to="/LoginSignup" className="nav-link">Login/Signup</Link></li>
                     <li className="navbar-list" ><Link to="/Apps" className="nav-link">Apps</Link></li>
                 </ul>
             </div>


         </nav>
             <div>
                 <h1>
                 </h1>
             </div>
         </>
        );
    }
}

export default Navbar;