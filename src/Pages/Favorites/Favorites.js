import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import AbbreviationList from "../../components/Abbreviation/AbbreviationList/AbbreviationList";
import witHeader from "../../hoc/withHeader";
import Loading from "../../components/UI/Loading/Loading";

import { loading as loadingStyle } from "./Favorites.module.scss";
import Axios from "axios";
import withError from "../../hoc/withError";

const Favorites = () => {
  let [favorites, setFavorites] = useState([]);
  let [loading, setLoading] = useState(true);
  let mounted = useRef(null);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    mounted.current = true;

    const fetchData = async () => {
      try {
        let res = await axios.get(
          '/abbreviations.json?orderBy="favorite"&equalTo=true'
        );
        const data = Object.keys(res.data).map((key) => {
          return { ...res.data[key], id: key };
        });
        if (mounted.current) {
          setFavorites(data);
          setLoading(false);
        }
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Cancel request");
        } else {
          console.log(error.message);
        }
      }
    };
    fetchData();
    return () => {
      mounted.current = false;
      source.cancel();
    };
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <div className={loadingStyle}>
            <Loading />
          </div>
        ) : (
          <AbbreviationList abbreviations={favorites} />
        )}
      </div>
    </>
  );
};

export default withError(witHeader(Favorites), axios);
