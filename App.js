import React from "react"
import data from "./data"
import from "./MovieItem"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            : data
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const = prevState..map( => {
                if (.id === id) {
                    return {
                        ...
                    }
                }
                return
            })
            return {
            }
        })
    }
    
    render() {
        const = this.state..map(item => < key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="movie-list">
                {}
            </div>
        )    
    }
}

export default App