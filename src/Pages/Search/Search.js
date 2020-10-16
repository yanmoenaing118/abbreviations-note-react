import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  search,
  search_form,
  search_results,
  result,
} from "./Search.module.scss";

const Search = ({ history }) => {
  const showDetailsHandler = () => {
    history.push("/abbr/5f7a957d9eac7f2cd460ada6");
  };
  return (
    <div className={search}>
      <div className={search_form}>
        <div onClick={(e) => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <form autoComplete="off">
          <input type="text" name="search" />
        </form>
      </div>
      <div className={search_results}>
        {["DOM", "TCP", "GDP", "ARP"].map((abbr) => {
          return (
            <div key={abbr} className={result} onClick={showDetailsHandler}>
              <p>{abbr}</p>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
