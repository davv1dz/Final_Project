import React from "react";
import {SoccerItem} from './soccerItem';

export class Soccers extends React.Component{
    render(){
        return this.props.soccers.map(
            (soccer)=>{
                return <SoccerItem soccer={soccer} key={soccer._id} ReloadData={this.props.ReloadData}></SoccerItem>
            }
        );
    }
}