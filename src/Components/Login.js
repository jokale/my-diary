import React from 'react'

class Login extends React.Component {
    render(){
        return(
            <div>
                <h1>My Diary Form</h1>
                <form>
                    <label>Email</label><br></br>
                    <input></input><br></br>
                    <label>Password</label><br></br>
                    <input type="password"></input><br></br>
                    <br></br> <button type="submit">Log in</button><br></br>
                </form>
            </div>
        )
    }
}

export default Login