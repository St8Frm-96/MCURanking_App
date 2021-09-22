import React from "react"

function () {
    const = {
    }

    return (
        <div className="movie-item">
            <input 
                type=""  
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style>{props.item.text}</p>
        </div>
    )
}

export default MovieItem