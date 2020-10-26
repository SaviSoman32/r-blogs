import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

const Bloglist = () => {
    const dispatch = useDispatch();
    const [searchBy, setSearchBy] = useState("");
    let blogs = useSelector(state => state.blogs);
    const [searchResults, setSearchResults] = useState(blogs.items);
    console.log('searchResults', blogs);
    
    useEffect(() => {
        dispatch(userActions.getAllBlogs());
    }, []);

    // const handleChange = event => {
    //     setSearchBy(event.target.value);
    // };
    return (
      <div>
        {/* <div className="md-form mt-0">
        <input className="form-control" type="text" value={searchBy} placeholder="Search By Name and Title" aria-label="Search" onChange={handleChange} />
        </div> */}
        {blogs.loading && <em>Loading blogs...</em>}
        <table className="table table-bordered table-hover" width="100">
        <tbody>
            <tr>
              { blogs && blogs.items && blogs.items.map((blog, index) => {
                 return (<tr>
                     <td>{blog.id}</td>
                     <td><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></td>
                     <td>{blog.body}</td>
                    </tr>)
              })}
            </tr>
        </tbody>
        </table>
      </div>
    );
}

export default Bloglist;


