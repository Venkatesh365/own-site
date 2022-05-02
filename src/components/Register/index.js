import {Component} from 'react'
import axios from 'axios'
class Register extends Component {
  state = {
    name:'',
    username: '',
    password: '',
    gender:'',
    location:''
  }
   

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }
  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/login')
  }


  submitForm = async event => {
    event.preventDefault()
    const {name,username,password,gender,location} = this.state
   
  axios.post(`https://a-u-t-h-e-n-t-i-c-a-t-i-o-n.herokuapp.com/login`, { name,username,password,gender,location })
      .then(data => {
        if(data.status === 200 ){
          this.onSubmitSuccess()
        }
       
      })
  }
  renderNameField = () => {
    const {name} = this.state
    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="name-input-filed"
          value={name}
          onChange={this.onChangeName}
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
  renderGenderField = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="gender">
          GENDER
        </label>
        <input
          type="text"
          id="gender"
          className="gender-input-filed"
          value={gender}
          onChange={this.onChangeGender}
        />
      </>
    )
  }
  renderLocationField = () => {
    const {location} = this.state
    return (
      <>
        <label className="input-label" htmlFor="location">
          LOCATION
        </label>
        <input
          type="text"
          id="location"
          className="location-input-filed"
          value={location}
          onChange={this.onChangeLocation}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
       
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo"
            alt="website logo"
          />
           <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderGenderField()}</div>
          <div className="input-container">{this.renderLocationField()}</div>
          <button type="submit" className="login-button">
            Create an account
          </button>
        </form>
      </div>
    )
  }
}

export default Register