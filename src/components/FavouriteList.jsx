import React from 'react';

function FavouriteList(props) {
    return (
        <div>

            <ul className='movies-list'>
                {props.favourites.map((movie) =>

                    <li className='movies-item'>

                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} height="200px" width="300px" />

                        <span>{movie.title}</span>
                        
                        {/* <button onClick={props.removeMoviefromFavourite(movie.id)} >Remove from fav</button> */}

                    </li>

                )}
            </ul>

        </div>
    );
}

export default FavouriteList;