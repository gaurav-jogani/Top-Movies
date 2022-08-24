import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from 'axios';

import { Header } from '../Header/header';

export const Homepage = () => {

    let [movieList, setMovieList] = useState([]);
    let [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
    useEffect(() => {

        // Fetching the list of movies to show on homepage
        get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`).then((res) => {
            setMovieList(res.data.results);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clickHandler = (movie) => {
        navigate(`/movie/${movie.id}`, {
            state: {
                movie
            }
        });
    }

    return (
        <div data-testid='homepage'>
            <Header page='home' />
            <div className='homeMain'>

                {!loading ?
                    (movieList.length > 0 ? movieList.map((movie, index) => {
                        return (
                            <img onClick={() => clickHandler(movie)} key={index} width={'50%'} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                        )
                    })
                        : "No movies to display, Please try again after some time")
                    : "Loading .............."
                }

            </div>
        </div>
    )
}