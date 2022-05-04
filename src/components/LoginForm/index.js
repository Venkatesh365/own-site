import { Component } from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
 
  onSubmitSuccess = (jwtTkoken) => {
    const {history} = this.props;
    Cookies.set('jwtToken', jwtTkoken, {
      expires: 30,
      path: '/',
    })
    history.replace('/');
  }
 
  submitForm = async event => {
    event.preventDefault();
    const {username} = this.state
    const {password} = this.state
    if(username !== "" && password !== ""){
      const registerData = JSON.stringify(this.state)
      console.log(registerData)
      axios({
          method: 'POST',
          url: 'https://a-u-t-h-e-n-t-i-c-a-t-i-o-n.herokuapp.com/login',
          headers: {
              'Content-Type': 'application/json',
                  },
          data: registerData  
      })     
      .then(data => {
         if(data.status === 200 ){
           this.onSubmitSuccess(data.data.jwtToken)
         } 
      }    
      )
    }else{
      console.log("Please fill the Username and Password")
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/pevv-ccbp-tech/image/upload/v1651476543/Screenshot_26_ybmbqt.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
        <img
            src="https://res.cloudinary.com/pevv-ccbp-tech/image/upload/v1651476543/Screenshot_26_ybmbqt.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />

          <div className="input-container">
            <label className="input-label" htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              className="username-input-filed"
              value={this.state.username}
              onBlur={e => { if(e.target.value === ""){ alert("Name is required")}} }
              onChange={this.onChangeUsername}
            />
          </div>
          
          <div className="input-container">
            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              className="password-input-filed"
              value={this.state.password}         
              onBlur={e => { if(e.target.value === ""){ alert("Password is required")}} }
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <Link to="/create an account" className="nav-link">
          <h1>Create an account</h1>
          </Link>
         
        </form>
      
      </div>
      
    )
    
  }
  
}

export default LoginForm