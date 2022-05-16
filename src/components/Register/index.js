import { Component } from 'react'
import axios from 'axios'

class Register extends Component {
  state = {
    name:'',
    username: '',
    password: '',
    gender:'',
    location:'',
  }
 
  onSubmitSuccess = (jwtTkoken) => {
    const {history} = this.props;
   
    history.replace('/login');
  }
 
  submitForm = async event => {
    event.preventDefault();
    const {username} = this.state
    const {password} = this.state
    const {name} = this.state
    const {gender} = this.state
    const {location}=this.state
    if(username !== "" && password !== ""&&name!==""&&gender!==""&&location!==""){
      const registerData = JSON.stringify(this.state)
      axios({
          method: 'POST',
          url: 'https://e-c-o-m-m-e-r-c-e.herokuapp.com/users/',
          headers: {
              'Content-Type': 'application/json',
                  },
          data: registerData  
      })     
      .then(data => {
         if(data.status === 200 ){
           this.onSubmitSuccess()
         }if(data.data==="User already exists"){
             alert("User already exists")
         }
      }    
      )
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onChangeName = event => {
    this.setState({name: event.target.value})
  }
  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }
  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  render() {
   
    return (
      <div className="login-form-container">
      
        <form className="form-container" onSubmit={this.submitForm}>
         
           <div className="input-container">
            <label className="input-label" htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              className="username-input-filed"
              value={this.state.name}
              onBlur={e => { if(e.target.value === ""){ alert("Name is required")}} }
              onChange={this.onChangeName}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              className="username-input-filed"
              value={this.state.username}
              onBlur={e => { if(e.target.value === ""){ alert("Username is required")}} }
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
          <div className="input-container">
            <label className="input-label" htmlFor="gender">GENDER</label>
            <input
              type="text"
              id="gender"
              className="username-input-filed"
              value={this.state.gender}
              onBlur={e => { if(e.target.value === ""){ alert("Gender is required")}} }
              onChange={this.onChangeGender}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="location">LOCATION</label>
            <input
              type="text"
              id="location"
              className="username-input-filed"
              value={this.state.location}
              onBlur={e => { if(e.target.value === ""){ alert("Location is required")}} }
              onChange={this.onChangeLocation}
            />
          </div>
          <button type="submit" className="login-button">
            Create an account
          </button>
        </form>
      </div>
    )
  }
}

export default Register