const express = require('express')


const app = express()
const {addMovie, getMovie, deleteMovie} = require('./Controller/Controller')
app.use(express.json());


//GET
app.get('/api/get_movie', getMovie)

//POST
app.post('/api/add_movie', addMovie)

//PUT

//DELETE
app.delete('/api/delete_movie/:id', deleteMovie)

const port = 4005;

app.listen(port, () => (console.log(`servers good on port ${port}`)));