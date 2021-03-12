import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({})


  // const handleLike = () =>{
  //   // const color = likeColor ? '' : 'primary';
  //   setLikeColor(likeColor ? '' : 'primary');
  // }

    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/users`;
      fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))

      //single User
      fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then(res => res.json())
      .then(data => setSingleUser(data))

      //randomUser
      fetch(`https://randomuser.me/api`)
      .then(res => res.json())
      .then(data => setRandomUser(data.results[0]))

    },[])

  return (
    <div >
      
       <AccessAlarmIcon></AccessAlarmIcon>
       <ThumbUpAltIcon onClick={()=> setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>

       <h1>Name: {singleUser.name}</h1>
       <h2>Random name: {randomUser.name?.first}</h2>
       {
         users.map(user=> <li>{user.name}</li>)
       }
    </div>
  );
}

export default App;
