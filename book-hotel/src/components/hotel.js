import React from 'react'
import Axios from 'axios';

export default class Hotel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hotel :[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        Axios.get(`http://localhost:3004/hotels/${id}`).then(response => {
            this.setState({
                hotel : response.data
            })
            // console.log(response.data)
        })
        
    }

    render(){

        return (
            <div>
                <h2>Display Selected Hotel</h2>
                <div>
                    Hotel Name - {this.state.hotel.name} <br/> <br/>
                    Address - {this.state.hotel.address} - {this.state.hotel.city} - {this.state.hotel.name}<br/><br/>
                    Ratings - 
                </div>
            </div>
        )
    }
}