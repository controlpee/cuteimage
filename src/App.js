import React, { Fragment } from "react";

import ImageSearch from './components/ImageSearch/ImageSearch';
import ImageList from './components/ImageList/ImageList';
import Router from './Router';

const apiKey = "13923955-d1c0fe557c88aa0ec0b46c933";

class App extends React.Component {

    state = {
      images: [],
      error: null
  
  }

handleGetRequest = async ($event) => {
$event.preventDefault();
const searchTerm = $event.target.SearchValue.value;

const apiHost = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo`;
const request = await fetch(apiHost);
const response = await request.json();

if (!searchTerm) {
  this.setState({ error: "Please provide a value." });

}else {
  this.setState({ images: response.hits, error: null});

}

}
render() {

  return(
    <Fragment>
      <ImageSearch handleGetRequest={this.handleGetRequest} />
      
      {
        this.state.error !== null ?
      <Fragment className={ {color: "#aaa", textAlign: "center"} }>{ this.error }</Fragment> :
      <ImageList images={this.state.images} />
      }

    </Fragment>
  )
}
}

export default App;
