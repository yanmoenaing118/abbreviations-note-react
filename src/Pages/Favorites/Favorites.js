import React, { useEffect, useState } from "react";
import axios from "../../axios";
import AbbreviationList from "../../components/Abbreviation/AbbreviationList/AbbreviationList";
import witHeader from "../../hoc/withHeader";
import Loading from "../../components/UI/Loading/Loading";

import { loading as loadingStyle } from "./Favorites.module.scss";

const Favorites = () => {
  let [favorites, setFavorites] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('/abbreviations.json?orderBy="favorite"&equalTo=true')
      .then((res) => {
        console.log(res);
        const data = Object.keys(res.data).map((key) => {
          return { ...res.data[key], id: key };
        });
        setFavorites(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        <div className={loadingStyle}>
          <Loading />
        </div>
      ) : (
        <AbbreviationList abbreviations={favorites} />
      )}
    </div>
  );
};

export default witHeader(Favorites);
