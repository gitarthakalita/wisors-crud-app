import React, { Component } from 'react';

import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <Link to="/">
                <div className="sidebar-item logo">Wisors</div>
                </Link>
                <div className="sidebar-item menu">
                   <Link to="/registration">
                   <Button variant="outlined" color="primary" className="menu-item">Create</Button>
                   </Link>
                    <Link to="/retrieve">
                    <Button variant="outlined" color="primary" className="menu-item">Retrive</Button>
                    </Link>
                  <Link to="/update">
                  <Button variant="outlined" color="primary" className="menu-item">Update</Button>
                  </Link>
                   <Link to="/delete">
                   <Button variant="outlined" color="primary" className="menu-item">Delete</Button>
                   </Link>
                   
                </div>
            </div>
        )
    }
}

export default Sidebar;
