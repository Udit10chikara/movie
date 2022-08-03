import React from 'react'
import {NavLink} from 'react-router-dom'
import { useGlobalcontext } from './context'
import Search from './Search';
export default function Movie() {
    const { movie } = useGlobalcontext();
    //console.log(movie);
    return (
        <>
        <div className="container"><Search/>
        
        <section className="movie-page" >
            <div className="container grid grid-4-col">
                        {movie.map((val, index) => {
                            const movieName = val.Title.substring(0,15);
                return (
                    <NavLink to={`${val.imdbID}`}>
                            <div className="card">
                                <div className="card-info">
                                  <h2>{movieName? `${movieName}...`: movieName}</h2>
                                            <img className="img-thumbnail" src={val.Poster} alt="Card image cap"  />
                                            
                                </div>
                             </div>
                    </NavLink>
                                 )})}
                            </div>
                        
                          
                     
            </section>
            </div>     
        </>
         
            
       


    )
}
