import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {LyricsContext} from '../../context'
import Lyrics from '../Tracks/Lyrics'

function App(){
    return(
        <LyricsContext>
            <Router>
                <React.Fragment>
                    <Navbar />
                    <div className = "container">
                        <Switch>
                            <Route exact path = "/" component = {Main} />
                            <Route exact path = "/lyrics/track/:id" component = {Lyrics} />
                        </Switch>
                    </div>
                    <div className = "App"></div>
                </React.Fragment>
            </Router>
        </LyricsContext>
    )
}
export default App