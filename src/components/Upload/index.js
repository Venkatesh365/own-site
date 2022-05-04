import { Component } from 'react'
import axios from 'axios'

class Upload extends Component {
  state = {
    title:'',
    brand: '',
    price: '',
    id:'',
    image_url:'',
    rating:''
    
  }

  onChangeImageUrl = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'Vinay_eswar')
    data.append('cloud_name', 'pevv-ccbp-tech');
    var imgurl = 'https://api.cloudinary.com/v1_1/pevv-ccbp-tech/image/upload';
    const config = {
      method: "POST",
      body: data 
  };
    const res = await fetch(imgurl, config)
    const file = await res.json()
    this.setState({image_url : file.url})
    console.log(file.url)
  }

 
  onSubmitSuccess = (jwtTkoken) => {
    const {history} = this.props;
    history.replace('/products');
  }
 
  submitForm = async event => {
    event.preventDefault();
    const {title} = this.state
    const {brand} = this.state
    const {price} = this.state
    console.log(typeof(price))
    const {id} = this.state
    console.log(typeof(id))
    const {image_url}=this.state
    console.log(image_url)
    const {rating}=this.state
    if((title !== "") && (brand !== "") && (price !== "") && (id !== "") && (image_url !== "") && (rating !== "")){
      const registerData = JSON.stringify(this.state)
      axios({
          method: 'POST',
          url: 'https://e-r-r.herokuapp.com/upload',
          headers: {
              'Content-Type': 'application/json',
                  },
          data: registerData  
      })     
      .then(data => {
         console.log(data)
         if(data.status === 200 ){
           this.onSubmitSuccess()
         }if(data.data === "User already exists"){
             alert("User already exists")
         }
      }    
      )
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeBrand = event => {
    this.setState({brand: event.target.value})
  }
  onChangePrice = event => {
    this.setState({price: event.target.value})
  }
  onChangeId = event => {
    this.setState({id: event.target.value})
  }
  onChangeRating = event => {
    this.setState({rating: event.target.value})
  }

  render() {
   
    return (
      <div className="login-form-container">
      
        <form className="form-container" onSubmit={this.submitForm}>
         
           <div className="input-container">
            <label className="input-label" htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              className="username-input-filed"
              value={this.state.title}
              onBlur={e => { if(e.target.value === ""){ alert("title is required")}} }
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="brand">BRAND</label>
            <input
              type="text"
              id="brand"
              className="username-input-filed"
              value={this.state.brand}
              onBlur={e => { if(e.target.value === ""){ alert("brand is required")}} }
              onChange={this.onChangeBrand}
            />
          </div>
          
          <div className="input-container">
            <label className="input-label" htmlFor="price">PRICE</label>
            <input
              type="text"
              id="price"
              className="password-input-filed"
              value={this.state.price}         
              onBlur={e => { if(e.target.value === ""){ alert("price is required")}} }
              onChange={this.onChangePrice}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              className="username-input-filed"
              value={this.state.id}
              onBlur={e => { if(e.target.value === ""){ alert("id is required")}} }
              onChange={this.onChangeId}
            />
          </div>
          <div className="input-container">           
            <input
              type="file"
              id="imageurl"
              style={{display:"none"}}             
              onChange={this.onChangeImageUrl}
            />           
            <button className="username-input-filed">
                <label className="input-label" htmlFor="imageurl">
                    Upload_Image
                </label>
            </button>
            
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="rating">RATING</label>
            <input
              type="text"
              id="rating"
              className="username-input-filed"
              value={this.state.rating}
              onBlur={e => { if(e.target.value === ""){ alert("rating is required")}} }
              onChange={this.onChangeRating}
            />
          </div>
          <button type="submit" className="login-button">
            Upload
          </button>
        </form>
      </div>
    )
  }
}

export default Upload