import React from 'react'; 
import ReactDOM from 'react-dom';
import Search from './search.jsx'


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
          {title: 'LOTR', watched: true},
          {title: 'Advent Children', watched: true}
        ]
	  }
	}

	render() {
	  return (

        <div >
          <Search />
          <ul>
          {this.state.movies.map((movie, i) => (
          	<li key = {i}>
          	  <span className={movie.watched ? "watched" : ""}>{movie.title}</span>
          	</li>
          ))}
          </ul>
        </div>
       )
	}
}


ReactDOM.render(<MovieListApp />, document.querySelector("#movieList"))