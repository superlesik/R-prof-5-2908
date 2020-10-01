import React from 'react'

const Header = (props) => {
    return (
        <div className='header'>
            <span><strong>{props.userName}</strong>, welcome to the chat-messenger</span>
        </div>
    )
}

export default Header