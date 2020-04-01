import React, { Component } from 'react';

import {Button} from '@material-ui/core';

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-item logo">Wisors</div>
                <div className="sidebar-item menu">
                    <Button variant="outlined" color="primary" className="menu-item">Create</Button>
                    <Button variant="outlined" color="primary" className="menu-item">Retrive</Button>
                    <Button variant="outlined" color="primary" className="menu-item">Update</Button>
                    <Button variant="outlined" color="primary" className="menu-item">Delete</Button>
                   
                </div>
            </div>
        )
    }
}

export default Sidebar;
