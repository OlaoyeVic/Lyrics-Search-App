import React from 'react'
import Tracks from '../Tracks/Tracks'
import Search from '../Tracks/Search'

export default function Main() {
    return (
        <div>
            <React.Fragment>
                <Search />
                <Tracks />
            </React.Fragment>
        </div>
    )
}
