import React, { useContext } from 'react'
import {context} from '../../context'
import Spinner from '../Layout/Spinner'
import Track from './Track'

export default function Tracks() {
  const [state] = useContext(context)
  const {track_list, heading} = state


  if(track_list === undefined || track_list.length === 0){
    return <Spinner />
  } else {
  return (
    <React.Fragment>
       <h3 className = "text-center mb-4">{heading}</h3>
          <div className = "row">
            {track_list.map(item =>  
              <Track key = {item.track.track_id} track = {item.track} />
             )}
          </div>
    </React.Fragment>
  )
  }
}