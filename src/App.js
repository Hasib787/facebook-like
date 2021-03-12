import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  // const handleLike = () =>{
  //   // const color = likeColor ? '' : 'primary';
  //   setLikeColor(likeColor ? '' : 'primary');
  // }

  return (
    <div className="App">
       <h1>This is app js</h1>
       <AccessAlarmIcon></AccessAlarmIcon>
       <ThumbUpAltIcon onClick={()=> setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
    </div>
  );
}

export default App;
