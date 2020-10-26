import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

function Blogdetails({ match }) {
    const blog= useSelector(state => state.blogs);
    const dispatch = useDispatch();
    let params = match.params;
    useEffect(() => { 
        console.log(params.id);
        dispatch(userActions.blogDetails(params.id)); 
    }, []);
    console.log('blog', blog);
    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>{ blog.item && blog.item.title }</h1>
            { blog.loading && <em>Loading blogs...</em> }
            <p>{ blog.item && blog.item.body }</p>
        </div>
    );
}

export default Blogdetails;
