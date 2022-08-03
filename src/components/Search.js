import React from 'react'
import { useGlobalcontext } from './context'
export default function Search() {
    const {query,setQuery,error} = useGlobalcontext();
  return (
    <>
    <h2>Search your Favourite Movie</h2>
    <form onSubmit={(e)=>e.preventDefault()}>
        <div>
      <input type="text" placeholder="Please search your movie" value={query} onChange={(e)=>setQuery(e.target.value)} />
      </div>
    </form>
    <div>
        <div className="card-error">
            <p>{error.show && error.msg}</p>
        </div>
    </div>
    </>
  )
}
