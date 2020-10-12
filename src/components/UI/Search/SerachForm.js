import React from "react";

import { SearchForm as SearchFormStyle } from "./SearchForm.module.scss";

const SearchForm = ({ searchHandler }) => {
  return (
    <form className={SearchFormStyle} autoComplete="off">
      <input
        type="text"
        name="search"
        placeholder="search"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
