import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

export class Create extends React.Component {

    // important bind events from each onChange attributes
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTeamTitle = this.onChangeTeamTitle.bind(this);
        this.onChangeTeamPosition = this.onChangeTeamPosition.bind(this);
        this.onChangeNameOfPlayer = this.onChangeNameOfPlayer.bind(this)'


        this.state = {
           title:'',
           position:'',
           player:'

        }
    }

    // taking event when click the submit button in the form
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.position},
        ${this.state.player}`);

        const soccer = {
          title:this.state.title,
            position:this.state.position,
            player:this.state.player
        }

        axios.post('http://localhost:4000/api/soccers',soccer)
        .then()
        .catch();

        this.setState({
            title:'',
            position:'',
            player:''
        })
    }

    // when the value in the field changes, this event will triger.
    onChangeTeamTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeTeamPosition(e) {
        this.setState({
            position: e.target.value
        })
    }

    onChangeNameOfPlayer(e) {
        this.setState({
            player: e.target.value
        })
    }

    render() {
        return (
            // Insert HTML code in the div element
            <div >
                <br></br>
                <h3>Welcome, Here You Can Add The Following Information Below<</h3>
                <br></br>
                <center>
                <form onSubmit={this.handleSubmit}>
                    <Card style={{ width: '18rem' }}>
                    <div className="form-group">
                        <label>Add The Name Of the Soccer Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTeamTitle}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add Where you Predict The Soccer Team Will Finish In The League: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.onChangeTeamPosition}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add The Name Of Your Favourite Player On This Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.player}
                            onChange={this.onChangeNameOfPlayer}
                        />
                    </div>
                    </Card>
                    <br></br>
                    <input type="submit" value="Add" className="btn btn-success" />
                </form>
                </center>
            </div>
            


        )
    }
}
