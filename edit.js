import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [position, setPosition] = useState('');
    const [player, setPlayer] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/soccer/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setPosition(response.data.position);
            setPlayer(response.data.player);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editSoccer = {
            title:title,
            position:position,
            player:player
        }

        axios.put('http://localhost:4000/api/soccer/'+id,editSoccer)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Soccer Title: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Soccer Position: </label>
                        <input type="text"
                            className="form-control"
                            value={position}
                            onChange={(e)=>{setPosition(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Soccer Player: </label>
                        <input type="text"
                            className="form-control"
                            value={player}
                            onChange={(e)=>{setPlayer(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Edit Soccer"></input>
            </form>
        </div>
    );
}