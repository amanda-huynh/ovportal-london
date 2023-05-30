import React from "react";
import SearchBar from './SearchBar';
import { SEARCH_QUERIES } from "./SearchQueries";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            {/* <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            /> */}
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Recent Activity</h1>
            <SearchBar data={ SEARCH_QUERIES } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
