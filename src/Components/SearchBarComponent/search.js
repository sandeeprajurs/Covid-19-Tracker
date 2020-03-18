import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';
import "../../style/searchbar.css";
import SearchIcon from "@material-ui/icons/Search";

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            suggestions: [],
        };
    }
    
    renderSuggestion = suggestion => (
        <div>
          {suggestion.country}
        </div>
    );

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
    };

    getSuggestionValue = (suggestion) => {
        // console.log("clicked");
        this.props.onSearchSelection(suggestion.country);
        return suggestion.country
    };

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : this.props.countries.filter(country => 
            country.country.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    };


    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };

    render() {
        console.log(this.state.suggestions)
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Search based on Country',
            value,
            onChange: this.onChange
        };
    
        return (
            <div className="center-div">
                <SearchIcon
                    style={{
                        position: "absolute",
                        zIndex: "1",
                        left: "1.7%",
                        top: "9px"
                    }}
                />
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        )
    }
}

export default Search;