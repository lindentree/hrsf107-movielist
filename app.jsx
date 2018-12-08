import React from 'react'; 
import ReactDOM from 'react-dom';

class MovieListApp extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {
	  	movies:  [
          {title: 'Mean Girls', watched: false},
          {title: 'Hackers', watched: false}, 
          {title: 'The Grey', watched: false},
          {title: 'Sunshine', watched: false},
          {title: 'Ex Machina', watched: false},
        ]
	  }
	}

	render() {
	  return (
        <div>
          <ol>
          {this.state.movies.map(movie => (
          	<li key = {movie.id}>
          	  <span className={movie.watched ? "watched" : ""}>{movie.title}</span>
          	</li>
          ))}
          </ol>
        </div>
       )
	}
}

ReactDOM.render(<MovieListApp />, document.querySelector("#movieList"))