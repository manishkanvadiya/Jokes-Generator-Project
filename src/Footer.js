import React from 'react'
import Api from './Api';

export default function Footer(w) {
    return (
        <div>
             <button className="footer" onClick={getJokes}>Get New</button>
        </div>
    )
}
