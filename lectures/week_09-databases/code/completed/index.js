var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var Movie = require('./models/Movie');

// Load envirorment variables
dotenv.load();


// Connect to MongoDB
console.log(process.env.MONGODB)
mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

// Setup Express App
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/movie', function(req, res) {
    var movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        year: parseInt(req.body.year),
        reviews: []
    })

    movie.save(function(err) {
        if(err) throw err
        return res.send("Movie uploaded!")
    })
});

app.delete('/movie/:id', function(req, res) {
    Movie.findByIdAndRemove(req.param.id, function(err, movie){
        if(!movie) return res.send("Not Deleted")
        res.send("Deleted")
    })
});

app.get('/movie', function(req, res) {
    Movie.find({},function(err, movies){
        if(err) throw err
        res.send(movies)
    })

});

app.post('/movie/:id/review', function(req, res) {
    Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err) throw err
        if(!movie) return res.send("No movie of id exists")
        var review = {
            rating: parseFloat(req.body.rating),
            comment: req.body.comment,
            author: req.body.author
        }
        /* mongo $pushAll is deprecated (mongoose.push builds ontop of $pushall)
            instead we use .concat()
        */
        movie.reviews = movie.reviews.concat([review])
        movie.save(function(err){
            if (err) throw err
            return res.send("Movie review added!")
        })
    });
    
});

app.delete('/movie/:id/review/last', function(req, res) {
    // Delete last review

});


app.listen(3000, function() {
    console.log('App listening on port 3000!');
})
