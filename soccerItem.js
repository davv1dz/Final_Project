import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";


export class SoccerItem extends React.Component {

    constructor(){

        super();

        this.DeleteSoccer = this.DeleteSoccer.bind(this);

    }
    DeleteSoccer(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/soccer/'
        +this.props.soccer._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }    
    
    render() {
        return (
            <div>
                {/* <h4>{this.props.soccer.title}</h4>
        <img src={this.props.soccer.thumbnailUrl}></img>
                <h6>{this.props.soccer.players[0]}</h6> */}

                <Card>
                    <Card.Header>{this.props.soccer.title}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <hr></hr>
                        <p>Player:  {this.props.soccer.player}</p>
                        <p>Position:  {this.props.soccer.position}</p>
                        <hr></hr>
                       </Card.Text>
                    </Card.Body>
                <Link to={'/edit/'+this.props.soccer._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteSoccer}>Delete</Button>
                </Card>
            </div>
        );
    }
}
