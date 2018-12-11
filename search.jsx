import React from 'react'; 
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = ''

  
  }

render() {
  return (
    <div className="topnav">
    <input type="text" placeholder="Search..."/>
    <button> Go </button>
   </div>
  )	
}

handleSearchSubmission(event){
	
}

}

export default SearchBar;





