import React from 'react';
import './style.module.css';

function Cardbottom({stats}){
    return(
        <div className={'cardbottom'}>
            
            <p>Followers <p>{stats.followers}</p></p>
            <p>Views <p>{stats.views}</p></p>
            <p>Likes <p>{stats.likes}</p></p>
            
        </div>
        )
}


export default Cardbottom;