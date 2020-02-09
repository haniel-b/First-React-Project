import React from 'react';

import Avatar from '../assets/avatar.png'

function Header(){
  return(
    <header>
      <nav>
        <img src = {Avatar} />
        <span>Facebook</span>
        <div>          
          <span>Profile</span>
          <i className = "material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  )
}

export default Header;