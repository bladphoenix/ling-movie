import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    // const movie = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f4c496325f5a5ef815f14a6b62c64bee')
    // const movie = await axios.get('${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}')
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}
