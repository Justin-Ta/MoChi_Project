export const ListPopularMovieAPI="https://api.themoviedb.org/3/movie/now_playing?api_key=ed1d4ae25e388acd06dc5a3d81665214&language=en-US&page=1";

export const DetailMovieAPI=(id)=>{
    return `https://api.themoviedb.org/3/movie/${id}?api_key=ed1d4ae25e388acd06dc5a3d81665214&language=en-US`
}
