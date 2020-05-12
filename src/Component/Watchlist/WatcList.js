import React, { Component } from 'react';
import Axios from 'axios';
import './Watchlist.css';



class WatchList extends Component {
    constructor(props){
        super(props);

        this.state = {
            watchList: []
        }
    }




    render (){
        console.log('this.props', this.props.list)
    const mappedList = this.props.list.map(elem => {
        return <li>
            
            {elem.title}
            <button onClick={this.props.delete} value={elem.id}>X</button>
        </li>;
    })
        return(
            <div className='watchList'>
                <h1>Watch List</h1>
                <ul>
                {mappedList}
                </ul>
            </div>
        )
    }


}














export default WatchList;