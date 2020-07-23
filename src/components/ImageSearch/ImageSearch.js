import React from 'react';

import "./ImageSearch.css";

const ImageSearch = ({handleGetRequest}) => {

    return (

        
        <div className="imageSearch">
            <p className ="text">Search for Awesome and Fantastic Images</p>
        <form onSubmit = {handleGetRequest} className="imageSearch__form">
        <input type = "text" autoComplete = "off" name = "SearchValue" placeholder = "Search for images....."  />
        <button> Search</button>
        </form>
        </div>
    )


}
export default ImageSearch;