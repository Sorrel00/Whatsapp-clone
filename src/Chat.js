import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import "./Chat.css"
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

  return (
    <div className='chat'>
        <div className='chat__header'>
        <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${seed}`}/>

        <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>last seen at...</p>
        </div>

        <div className='chat__headerRight'></div>
        <IconButton>
            <SearchOutlined />
        </IconButton>

        <IconButton>
            <AttachFile />
        </IconButton>

        <IconButton>
            <MoreVert />
        </IconButton> 
        </div>


        <div className='chat__body'>
            <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className='chat__name'>Rolly</span>
                Hey guys

                <span className='chat__timestamp'>9:00pm</span>
            </p>
        </div>

        <div className='chat__footer'></div>
    </div>
  )
}

export default Chat