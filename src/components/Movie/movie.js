import { useLocation,useParams,useNavigate,Link } from 'react-router-dom';
import { Header } from '../header/header';
import borderLine from '../../assests/icons/Border.svg';
import playBtn from '../../assests/icons/Play.svg';
import './movie.css';
import { useEffect,useState } from 'react';
import {get} from 'axios';

export const Movie = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id} = useParams();
    const [movie,setMovie ] = useState(location.state ? location.state.movie : {});
    
    useEffect(() => {
        if(!location.state){
            get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`).then((res) => {
                setMovie(res.data);
        }).catch((err) => {
            console.log(err);
        })
        }
    },[]);


    return (
        <>
            <Header page='movie' />
            {movie.id && 
            <div className='movieMain'>
                <div className='movieTitle'>
                    {movie.original_title}
                </div>
                <div className='movieDesc'>
                    <div className='movieImg'>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    </div>
                    <div>
                        <div className='movieYear'>
                            {movie.release_date.substring(0, 4)}
                        </div>
                        <div className='movieDuration'>
                            {'120 mins'}
                        </div>
                        <div className='movieRating'>
                            {movie.vote_average}/10
                        </div>
                        <button className='addFvtBtn'>Add to Favourite</button>
                    </div>
                </div>
                <div className='movieOvrVw'>
                    {movie.overview}
                </div>

                <div className='movieTrl'>
                    TRAILERS
                    <div>
                    <img  src={borderLine} alt='' />
                    </div>
                </div>

                <div className='otrBox'>
                <div className='movieTrailers'>
                 <div className='trailerBox'>
                        <div className='trailerBoxOuter'>
                        <img src={playBtn} alt='' />
                        <a href="https://youtube.com" rel='noreferrer' target="_blank"><p>Play Trailer 1</p></a>
                        </div>
                    </div>
              
                </div>

                <div className='movieTrailers'>
                    <div className='trailerBox'>
                        <div className='trailerBoxOuter'>
                        <img src={playBtn} alt='' />
                        <a href="https://youtube.com" rel='noreferrer' target="_blank"><p>Play Trailer 2</p></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            }
        </>
    )
}