import { Component } from 'react'
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'


class Profile extends Component {
  state = { blogData: {}, isLoading: true }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const updatedData = localStorage.getItem("username")

    this.setState({ blogData: updatedData, isLoading: false })
  }

  renderBlogItemDetails = () => {
    const { blogData } = this.state
    return (
      <>
      <Header/>
      <div className="profile-section">
      <div className="profile-container">
        <CgProfile className="profile-icon" />
    <h1 className="profile-heading">{blogData}</h1>
    <Link to="/">
    <button className="profile-home-page-button" type="button">
      Back To Home Page
    </button>
  </Link>
  </div>
  </div>
  </>
    )
  }

  render() {
    const { isLoading } = this.state


    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="Oval" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default Profile