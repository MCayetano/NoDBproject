let watchList = [];
let id = 0;

module.exports = {
    addMovie: (req, res, next) => {
        try {
            const movie = {
                id: id,
                title: req.body.Title
            }
            console.log(movie)
            watchList.push(movie)
            id++
            console.log(watchList)
            res.status(200).send(watchList)
        } catch (error) {
            console.log(error)
        }
        
    },

    getMovie: (req, res, next) => {
        res.status(200).send(watchList)
    },

    deleteMovie: (req, res, next) => {
        const {id} = req.params
        let index = watchList.findIndex(movie => {
            return +watchList.id === +id;
        })
        watchList.splice(index, 1)
        res.status(200).send(watchList)
    }
}