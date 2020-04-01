import React, { Component } from 'react'

export class Homepage extends Component {

    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return (
            <div className="homepage-container">
                
                <h1>Welcome to Wisors</h1>

                <p>This is a dashboard application showcasing minimal CRUD operations of Wisors backend API</p>


               
            </div>
        )
    }
}

export default Homepage;
