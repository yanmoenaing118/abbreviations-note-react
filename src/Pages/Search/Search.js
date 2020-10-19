import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  search,
  search_form,
  search_results,
  result,
} from "./Search.module.scss";
import axios from "../../axios";

const Search = ({ history }) => {
  let [query, setQuery] = useState("");
  let [results, setResults] = useState([]);
  const showDetailsHandler = (id) => {
    history.push(`/abbr/${id}`);
  };

  const submitHanlder = async (query) => {
    setQuery(query);
    const q = query.toUpperCase();
    axios
      .get(`/abbreviations.json?orderBy="abbreviation"&startAt="${q}"`)
      .then((res) => {
        console.log(res);
        const data = Object.keys(res.data).map((key) => {
          return { ...res.data[key], id: key };
        });
        console.log(data);
        setResults(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeHandler = (q) => {
    submitHanlder(q);
  };
  const renderResults = () => {
    if (results.length > 0) {
      return results.map((abbr, i) => {
        return (
          <div
            key={abbr.id}
            className={result}
            onClick={() => showDetailsHandler(abbr.id)}
          >
            <h3>{abbr.abbreviation}</h3>
            <p>{abbr.stands_for}</p>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        );
      });
    }

    return null;
  };
  return (
    <div className={search}>
      <div className={search_form}>
        <div onClick={(e) => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
        </div>
        <form autoComplete="off" onSubmit={submitHanlder}>
          <input
            autoFocus
            type="text"
            name="search"
            value={query}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </form>
      </div>
      <div className={search_results}>{renderResults()}</div>
    </div>
  );
};

export default Search;
