import React from 'react'; 
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = ""
  }

render() {
  return (
    <div class="topnav">
    <input type="text" placeholder="Search.."/>
   </div>
  )	
}


}






