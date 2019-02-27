import React from 'react'
import axios from 'axios'

export default class SearchBy extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hotels:[],
            names: [],
            cities: [],
            countries: [],
            search:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.filteredResult = this.filteredResult.bind(this)
        
        
    }

componentDidMount(){

    axios.get('http://localhost:3004/hotels').then(response => {
        let hotels = response.data
        hotels.forEach(hotel => {
            this.setState({
         hotels: hotels,
         names: hotel.name,
         countries: hotel.country

              })

        })
     
    })
 }


    handleChange(e){
        this.setState({
            search: e.target.value
        })
        
    }
    
 filteredResult(search){
   return function(data){
       return data.name.toLowerCase().includes(search.toLowerCase()) || !search
   }
 }
    render(){
    //    const search = this.state.search
    //    const filteredResult = this.state.names.filter(name => {
    //        return name.indexOf(search.toLowerCase()) !== -1
    //    })
        
        return (
            <div>
                <h4>Filter Hotel</h4>
                
                    <label> Name :
                        <input type="text" value={this.state.search}  placeholder="Search by Name" onChange={this.handleChange} /> 
                        <div>
                            {this.state.hotels.filter(this.filteredResult(this.state.search)).map(hotel => {
                                return (
                                    <ul>
                                        <li key={hotel._id}>{hotel.name}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </label>
                <label> City :
                        <input type="text" placeholder="Search by City" name="city" onChange={this.handleChange} />
                </label>
                <label> Country :
                        <input type="text" placeholder="Search by Country" name="country" onChange={this.handleChange} /> 
                    </label>
                    <label> Ratings: 
                        <input type="text" name="ratings" />
                    </label>
                    
                
                
            </div>
        )
    }
}