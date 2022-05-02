import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
   
   
  }
 
  
 
  onSubmitSuccess = (jwtTkoken) => {
    const {history} = this.props
    Cookies.set('jwtToken', jwtTkoken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }
 
 
  submitForm = async event => {
    event.preventDefault()
    const registerData = JSON.stringify(this.state);
    
   
    axios({
        method: 'POST',
        url: ' https://a-u-t-h-e-n-t-i-c-a-t-i-o-n.herokuapp.com/login',
        headers: {
            'Content-Type': 'application/json',
                },
        data: registerData,
       
    })
    
    .then(data =>{
       console.log(data.data.jwtToken)
       if(data.status === 200 ){
         this.onSubmitSuccess(data.data.jwtToken)
       }
      
      
    }).catch(err=>{
      if(err){
        alert("*username and password required")
      }
    })
  
    
  }
  onChangeUsername = event => {
    this.setState({username: event.target.value})
    
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
  
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
   
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
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
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm