let movie;

exports.movies = (ans) => {
    switch(ans) {
        case "1": movie = "Jawan"; break;
        case "2": movie = "3 Ekka"; break;
        case "3": movie = "Gadar 2"; break;
        case "4": movie = "Dream girl 2"; break;
        default: movie = "Invalid input";
    }       
    return movie;    
}
