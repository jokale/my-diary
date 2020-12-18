import React from 'react'
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        return(
            <div>
            <h6><NavLink
                to="/"
        //   exact
        //   style={link}
          activeStyle={{
            background: '#FFFFFF'
          }}
        >home</NavLink></h6>
            </div>
        )
    }
}

export default Navbar