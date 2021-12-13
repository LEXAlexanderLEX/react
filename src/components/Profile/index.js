import React from 'react';
import './style.module.css';
import Cardbottom from './cardbottom'

function Profile(props){
    return(
        <div className={'card'}>
            <img src={props.avatar} alt='wolf' title='wolf'/>
            <h1>{props.username}</h1> 
            <p>@{props.tag}</p>   
            <p>{props.location}</p>
            <Cardbottom stats={props.stats}/>
            
        </div>
        )
}


export default Profile;