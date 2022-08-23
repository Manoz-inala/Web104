import React, {Component} from 'react';

class PlayersInfo extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1 className="h1 d-flex justify-content-center" >Players Info</h1>
                </div>
                <div className="container mt-3">
                   <form>
                       <div className="form row">
                               <div className="form-group col-3"><input type="text" className="form-control" placeholder="Name"></input></div>
                               <div className="form group col-3"><input type="text" className="form-control" placeholder="Age"></input></div>
                               <div className="form-group col-3"><input type="text" className="form-control" placeholder="Role"></input></div>
                               <div className="text-center col-3"><button type="submit" className="btn btn-primary ">Submit</button></div>
                       </div>
                   </form>
                </div>
               <div><table className="table">
                       <thead className="thead-dark">
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Age</th>
                           <th scope="col">Role</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <th scope="row"></th>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <th scope="row"></th>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <th scope="row"></th>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       </tbody>
                   </table></div>
            </>


        );
    }
}

export default PlayersInfo;