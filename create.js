import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTeamTitle = this.onChangeTeamTitle.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangePlayer = this.onChangePlayer.bind(this);
        
        this.state = {
            title:'',
            position:'',
            player:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.position},
        ${this.state.player}`);

        const soccer ={
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

    onChangeTeamTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangePosition(e){
        this.setState({
            position:e.target.value
        })
    }
    onChangePlayer(e){
        this.setState({
            player:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Welcome, Here You Can Add The Following Information Below</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add The Name Of the Soccer Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTeamTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Where you Predict The Soccer Team Will Finish In The League: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.onChangePosition}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add The Name Of Your Favourite Player On This Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.player}
                            onChange={this.onChangePlayer}
                        />
                    </div>

                    <input type="submit" value="Add To The Database" />
                </form>
            </div>
        );
    }
}