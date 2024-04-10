import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import './SidebarChat.css';

function SidebarChat({id, name, addNewChat}) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if(roomName){
        //do something 
    }
  };

  return !addNewChat ?  (
    <div className='sidebarChat'>
      <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${seed}`} />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>Last message</p>
      </div>
    </div>
  ): (
    <div onClick={createChat}
    className='sidebarChat'>
        <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;