import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { context } from '../../context'

export default function Search() {
    const [state, setState] = useContext(context)
    const [search, setSearch] = useState('')
    const [trackTitle, setTrackTitle] = useState('')

    useEffect(() =>{
        if(trackTitle){
        axios.get(`https://cors-access-allow.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
            process.env.REACT_APP_MM_KEY
          }`)
          .then(res => {
              let track_list = res.data.message.body.track_list
              setState({track_list: track_list, heading: "Search Results"})
              console.log(track_list)
          })
          .catch(err => console.log(err))
        }
    }, [trackTitle])

    function handleSubmit(event){
        event.preventDefault()
        if(search) setTrackTitle(search)
        setSearch('')
    }
    function handleChange(event){
        setSearch(event.target.value)  
    }

    return (
        <div className = "card card-body mb-4 p-4">
        <h1 className = "display-4 text-center">
            <i className = "fas fa-music"></i>Search for a song
        </h1>
        <p className = "lead-text-center">Get the lyrics for any song</p>
        <form onSubmit = {handleSubmit}>
            <div className = "form-group">
                 <input 
                     type = "text" 
                     className = "form-control form-control-lg"
                     placeholder = "Song title" 
                     name = "search"
                     value = {search}
                     onChange = {handleChange}
                      />
            </div>
            <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                Get track lyrics
            </button>
        </form>
     </div>
    )
}
