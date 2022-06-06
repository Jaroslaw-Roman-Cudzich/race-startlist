import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./SearchBar.css";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [entries, setEntries] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        console.log(searchInput);

    try {
        const result = await axios.get("https://ldt-tech-test.herokuapp.com/api/startlistentries");

        setEntries(result);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
        <div className="search-results-region"
        style={{padding: "40px"}}>
        <form>
            <input className="search-input-field"
                id="username"
                name="username"
                type="text" 
                placeholder="Organiser's title"
                value={searchInput}
                required
                onChange={handleChange}
            />
            <button className="search-bar-button" type="button" onClick={handleClick}>Search</button>
        </form>
        </div>
        <br></br>
        <br></br>
        <SearchResults entries={entries} />
        </>
    );
};

export default SearchBar;