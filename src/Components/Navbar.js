import React from 'react'
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        return(
            <div>
            <h6><NavLink
                to="/"
            activeStyle={{
            background: '#FFFFFF'
          }}
        >home
        </NavLink></h6>

           <h6><NavLink
                to="/about"
            activeStyle={{
            background: 'pink'
          }}
        >about
        </NavLink></h6>
        
        <h6><NavLink
                to="/login"
            activeStyle={{
            background: 'pink'
          }}
        >log in
        </NavLink></h6>

        <h6><NavLink
                to="/signup"
            activeStyle={{
            background: 'pink'
          }}
        >sign up
        </NavLink></h6>
        
            </div>
        )
    }
}

export default Navbar