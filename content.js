import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome To My Premier League Soccer Team Application</h1>
                <h2>The Current Time is: {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}