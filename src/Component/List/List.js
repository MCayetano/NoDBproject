import React, { Component } from 'react';
import axios from 'axios';
import WatchList from '../Watchlist/WatcList';

class List extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            movieCard: [],
            watchList: []
        }
    }

    componentDidMount() {
        this.getWatchList()
    }


    getMovie = () => {
        axios.get(`http://www.omdbapi.com/?apikey=24f748f3&t=${this.state.title}`).then(res => {
            this.setState({
                movieCard: res.data
            })
        })
    }

    getWatchList = () => {
        axios.get('/api/get_movie').then(res => {
            this.setState({
                watchList: res.data
            })
        })
    }


    delete = (event) => {
        let id = event.target.value
        console.log(id)
        axios.delete(`/api/delete_movie/${id}`).then(res => {
            this.setState({
                watchList: res.data
            })
        })
        .catch(error => console.log(error))
    }

    changeHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    clickHandler = () => {
        console.log(this.state.movieCard)
        axios.post('/api/add_movie', this.state.movieCard).then(res => {
            this.setState ({
                watchList: res.data
            })
        })
    }


    render(){
        let {movieCard} = this.state
        return(
            <div className='outSide'>
            <div>
                <input type="text" onChange={this.changeHandler} placeholder="Enter Movie Title..." value={this.state.title} />
                <button onClick={this.getMovie}>Search</button>
                <button onClick={this.clickHandler}>Add</button>
                <h1>{movieCard.Title}</h1>
                <h2>{movieCard.Year}</h2>
                <h2>{movieCard.Rated}</h2>
                <h2>{movieCard.Released}</h2>
                <h2>{movieCard.Runtime}</h2>
                <h2>{movieCard.Genre}</h2>
                <h2>{movieCard.Actors}</h2>
                <h2>{movieCard.Plot}</h2>
                {movieCard.Poster ? <img src={movieCard.Poster} alt="MovieImage"/> : null}
            </div>
            <WatchList list={this.state.watchList} delete={this.delete} />
            </div>
        )
    }







}



export default List;