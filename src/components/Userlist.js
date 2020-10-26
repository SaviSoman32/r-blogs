import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

const Userlist = () => {
    let users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [searchBy, setSearchBy] = useState("");
    const [searchResults, setSearchResults] = useState(users);
    
    // const handleChange = event => {
    //     setSearchBy(event.target.value);
    // };

    // const handleClick= event => {
    //     if(searchResults && searchResults.items) {
    //         console.log('rr1', searchResults);
    //         const results = searchResults.items.filter(user => {
    //             return user.name.toLowerCase().includes(searchBy.toLowerCase())
    //         });
    //         //setSearchResults(results);
    //      console.log('rr12', searchResults);
    //     }
    // };

    useEffect(() => {
        dispatch(userActions.getAll());
    },[]);
    return (
      <div>
        {/* <div class="form-inline mr-auto mb-4 float-right">
            <input className="form-control mr-sm-2" type="text" value={searchBy} placeholder="Search By Name" aria-label="Search" onChange={handleChange} />
            <input className="btn btn-primary my-0" type="submit" value="Search" onClick={handleClick} />
        </div> */}
        {users.loading && <em>Loading users...</em>}
        <table className="table table-bordered table-hover" width="100">
        <tbody>
            <tr>
            { users && users.items && users.items.map((user, index) => {
                 return (<tr>
                     <td key={user.id}>{user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.username}</td>
                     <td>{user.email}</td>
                     <td>{user.phone}</td>
                     <td>{user.address.street}</td>
                     <td>{user.address.zipcode}</td>
                     <td>{user.website}</td>
                     <td>{user.company.name}</td>
                    </tr>)
              })}
    
            </tr>
        </tbody>
        </table>
      </div>
    );
}  
  
export default Userlist;



