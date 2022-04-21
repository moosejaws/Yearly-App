import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const { logout } = props
    
    return (

        <div id="navbar">

        <ul  class="nav justify-content-center">
        
        <li class="nav-item"> <Link  to="/profile" >Profile</Link></li>
        <li class="nav-item"><Link to="/public">Public</Link></li>
        
        
        <li class="nav-item" id="float-right"><Link  onClick={logout} to="/"> Log Out</Link></li>
        </ul>

        </div>
    )
}