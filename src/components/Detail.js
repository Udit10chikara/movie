import React, {useEffect,useState} from 'react'
import { Api_url } from './context';
import {useParams,NavLink} from 'react-router-dom'
export default function Detail() {
const {id} = useParams();
console.log(id);
const [loading,setLoading] = useState(true);
const [movie,setMovie] = useState("");

const getMovie =async(url)=>{
    console.log(url);
    setLoading(true)
    await fetch(url)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.Response === "True"){
            setLoading(false)
            setMovie(data)
           
        }
        
     })
     .catch(err=>{
        console.log(err);
     })
}

   useEffect(()=>{
    let timerout = setTimeout(()=>{
        getMovie(`${Api_url}&i=${id}`);
    }, 800)
       return ()=> clearTimeout(timerout);
   }, [id])

   if (loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
   
    
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/movie" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  )
}
