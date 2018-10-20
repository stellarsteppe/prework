/**
 * Creator: steppe
 * Date Created: 10/19/18
 * Date Last Modified: 10/19/18
 */

var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    }
]

movies.forEach(function(movie) {
    var result = "You Have " ;
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})

movies.forEach(function(movie) {   //written simpler
    console.log(buildString(movie));
});

//WORKS