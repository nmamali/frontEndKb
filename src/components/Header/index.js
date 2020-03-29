import React, {Component} from 'react';
import './header.css'
import Logo from './covid.png';


function Header() {
    return (
      <div>
<div class="header-header">

  <div class='row'>
      <div col-md-6>
      <img class='header-image' src={Logo}/>
      </div>
      <div col-md-6 class='logo-position'>
      <h1>Covid 19</h1>
      </div>
  </div>

</div>
        
         
    
  
    </div>
    )
}

export default Header;





