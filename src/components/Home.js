import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Welcome to  R-Blogs</h1>
            <p><Link to="/users">Users</Link></p>
            <p><Link to="/blogs">Blogs</Link></p>
            <p><Link to="/login">Logout</Link></p>
        </div>
    );
}

export default Home;
