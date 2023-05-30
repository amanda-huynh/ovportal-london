import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SEARCH_QUERIES } from "./SearchQueries";
import SearchCardList from "./SearchCardList";
import ProjectPage from "./ProjectPage";
import "./SearchBar.css";

const SearchBar = ({ data }) => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: theme.palette.text.primary,
      lineHeight: "60px",
      width: 250,
    },
  }));

  const classes = useStyles();

  const handleSearch = (e) => {
    // Suggested search results card components
    const allFields = {};
    data.forEach((item) => {
      if (!allFields[item["project-name"]]) {
        allFields[item["project-name"]] = true;
      }
      if (!allFields[item["project-id"]]) {
        allFields[item["project-id"]] = true;
      }
      if (!allFields[item["partner-name"]]) {
        allFields[item["partner-name"]] = true;
      }
    });

    const updatedQuery = e.target.value;
    setQuery(updatedQuery);

    if (updatedQuery) {
      const filtered = SEARCH_QUERIES.filter(
        (Card) =>
          Card.project_id.toLowerCase().includes(updatedQuery.toLowerCase()) ||
          Card.project_name
            .toLowerCase()
            .includes(updatedQuery.toLowerCase()) ||
          Card.partner_name.toLowerCase().includes(updatedQuery.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // On search, display search results
  const handleSearchButton = (e) => {
    e.preventDefault();
    if (query) {
      const searchUrl = `./projects/search=${query}`;
      window.location.href = searchUrl;
    }
    // if (query) {
    //   const searchPath = `./projects/${query}`;
    //   if (location.pathname !== searchPath) {
    //     <ProjectPage projectName={query} />;
    //     console.log(query);
    //     window.location.href = searchPath;
    //   }
    // }
  };

  // Link to project page
  const handleCard = (projectName) => {
    const searchPath = `./projects/${projectName}`;
    if (location.pathname !== searchPath) {
      // <ProjectPage projectName={projectName} />;
      // console.log(projectName);
      window.location.href = searchPath;
      // window.history.pushState({}, '', searchPath);
    }
  };

  return (
    <div className="Projects">
      <div className="SearchBar">
        <form onSubmit={handleSearchSubmit}>
          <input
            className="SearchBar-input"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            list="suggestions"
          />
          <button className="SearchBar-button" onClick={handleSearchButton}>
            Search
          </button>
        </form>
        <br />

        <SearchCardList filteredCards={filteredCards} handleCard={handleCard} />
      </div>
    </div>
  );
};

export default SearchBar;
