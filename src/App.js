import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Register from './components/Register'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Upload from './components/Upload'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/create an account" component={Register} />
      <ProtectedRoute exact path="/upload" component={Upload} />
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
