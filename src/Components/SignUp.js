import React from 'react'

class SignUp extends React.Component {
    render(){
        return(
            <div>
                <h1>My Diary Sign up form</h1>
                <form>
                    <label>Name</label> <br></br>
                    <input placeholder="Name" type="text"></input> <br></br>
                    <label>Email</label> <br></br>
                    <input placeholder="Email" type="text"></input> <br></br>
                    <label>Password</label> <br></br>
                    <input type="password" placeholder="password" ></input> <br></br>
                    <label>Enter password once more</label> <br></br>
                    <input type="password" placeholder="password"></input> <br></br>
                    <br></br> <button type="submit">Create your diary</button>
                </form>
            </div>
        )
    }
}

export default SignUp