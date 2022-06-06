import React from "react";
import "./SearchResults.css";

const SearchResults = (props) => {
    const { entries } = props;
    console.log("Race startlist data: ", entries.data);

    const searchByOrganiserTitle = 
        entries.length === 0 ? ( 

            <h4 className="invalid-search-input">Please enter a valid organiser's title.</h4>      
        ) : (
            <h4 className="search-result" key="item.id">Please see your list here.: {((entries.data.map(function(el) {
                return el.raceTitle;
              }))
            )}.</h4>);

    return <ul className="search-result-region">{searchByOrganiserTitle}</ul>;
};

export default SearchResults;