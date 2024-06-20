import { useState } from 'react'
import './chat.scss'

const Chat = () => {

  const [chat,setChat] = useState(true)
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="message" key={index} onClick={()=>setChat(true)}>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <p>Hi, how are you...</p>
          </div>
        ))}
      </div>
      {chat && (
      <div className="chatBox">
        <div className="top">
          <div className="user" >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h1>John Doe</h1>
          </div>
          <span className='close' onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center" >
          {Array.from({ length: 10 }).map((_, index) => (
            <div className={`chatMessage ${index % 2 === 0 ? 'own' : ''}`} key={index}>
              <p>Lorem ipsum dolor sit amet...</p>
              <span>1 hour ago</span>
            </div>
          ))}
        </div>
        <div className="bottom">
          <textarea placeholder='..'></textarea>
          <button>Send</button>
        </div>
      </div>)}
    </div>
  )
}

export default Chat
