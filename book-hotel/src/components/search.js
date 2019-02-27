import React from 'react'
import SearchBy from './searchBy';
import axios from 'axios'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Alert} from 'reactstrap'

export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hotels:[]
        }
        this.getData = this.getData.bind(this)
    }
    componentDidMount(){

       axios.get('http://localhost:3004/hotels').then(response => {
        this.setState({
            hotels: response.data
        })
       })
    }
    getData(){
        return this.state.hotels
    }

    render(){
        return (
            <div>
                <h2>Display Hotels</h2>
                <SearchBy data={this.getData}/>
                <p>List of Hotels</p>
                <ol style={{textAlign: "left"}}>
                    {this.state.hotels.map(hotel => {
                       return <li key={hotel._id}><Alert color="warning"><Link to={{
                           pathname: `/hotels/${hotel._id}`,
                           state: {
                               hotel
                           }
                       }}>{hotel.name}</Link></Alert></li>
                    })}
                </ol>
            </div>
        )
    }
}