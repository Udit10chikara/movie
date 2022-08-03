import React,{createContext, useContext, useEffect, useState} from 'react';
const Appcontext = createContext();
//const Api_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`;
//export const Api_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
export const Api_url = `https://www.omdbapi.com/?apikey=fad06fc1`;

const AppProvider =({children})=>{
const [loading,setLoading] = useState(true);
const [movie,setMovie] = useState([]);
const [error,setError] = useState({show:"false",msg:""});
const [query,setQuery] = useState("titanic");
const getMovie =async(url)=>{
    await fetch(url)
     .then(res=>res.json())
     .then(data=>{
       
        if(data.Response === "True"){
            setLoading(false)
            setMovie(data.Search)
            setError({
                show:false,
                msg:"",
              })
        }
        else{
              setError({
                show:true,
                msg:data.Error,
              })
        }
     })
     .catch(error=>{
        
     })
}

   useEffect(()=>{
    let timerout = setTimeout(()=>{
        getMovie(`${Api_url}&s=${query}`);
    }, 500)
       return ()=> clearTimeout(timerout);
   }, [query])

    //  const {movies} = movie
    //  const {loadings} = loading
    //  const {errors} = error
    return <Appcontext.Provider value={{loading,movie,error,query,setQuery}}>
        {children}
    </Appcontext.Provider>
}
const useGlobalcontext=()=>{
    return useContext(Appcontext);
}
export { Appcontext, AppProvider, useGlobalcontext };
