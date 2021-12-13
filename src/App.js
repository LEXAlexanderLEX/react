import React from 'react'
import Profile from './components/Profile/index'


const user={
  "username":"Alex Nosurname",
  "tag":"ANS",
  "location":"Kharkov, Ukraine",
  "avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats":{
      "followers": 5603,
      "views": 4827,
      "likes": 1008
  }
}

function App(){
  return(
    <div className={'wrapper'}>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      </div>

  )
}




export default App;
