import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap'
import { Alert } from 'reactstrap';


import Login from './components/login'
import Register from './components/register'
import Search from './components/search'
import Hotel from './components/hotel'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hotels: []
    }
  }
  
  render() {
    return (
      <BrowserRouter>
      <div style={{textAlign:"center", backgroundImage: `url(require("images/68184730.jpg"))`}}>
        <Alert color="primary"><h2>Welcome the BookHotel website</h2></Alert>
        
         <br/>
        <Link to="/login"><Button color="primary">   SIGN UP  </Button></Link> {' '}
        <Link to="/register"><Button color="danger">   SIGN IN  </Button></Link>
        <br/> <br/>

        <Link to="/search"><Button color="info">Search</Button></Link>       
     
        
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact/>
        <Route path="/search" component={Search} exact/>
        <Route path="/hotels/:id" component={Hotel} exact/>


      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
