import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';

const cookies = new Cookies();

import { ChannelListContainer, ChannelContainer, Auth } from './components';

const apiKey = 'yqwt2xy8qgmb';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) { // if we will have authtoken then we will create user
    client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber')
    }, authToken)
}

const App = () => {

  if(!authToken) return <Auth />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
          <ChannelListContainer
              
          />
          <ChannelContainer

          />
      </Chat>
    </div>
  )
}

export default App;
