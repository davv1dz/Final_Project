import React from "react";
import { Soccers } from "./soccer";
import axios from "axios";

export class Read extends React.Component{

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/soccers')
        .then((response)=>{
            this.setState({soccers:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    

    componentDidMount() {
        axios.get('http://localhost:4000/api/soccers')
        .then((response)=>{
            this.setState({soccers:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        soccers:[ ]
        

    }
    
    render(){
        return(
            <div>
                <h3>Here Is Where You Can Find Your Inputed Data Below</h3>
                <Soccers soccers={this.state.soccers} ReloadData={this.ReloadData}></Soccers>
              
            </div>
        );
    }
}