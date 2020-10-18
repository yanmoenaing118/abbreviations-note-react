import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Loading from "../../components/UI/Loading/Loading";
import withError from "../../hoc/withError";
import witHeader from "../../hoc/withHeader";

import AbbreviationList from "./../../components/Abbreviation/AbbreviationList/AbbreviationList";

import { loading as loadingStyle } from "./Home.module.scss";

const Home = (props) => {
  let [abbreviations, setAbbreviations] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/abbreviations.json")
      .then((res) => {
        const data = Object.keys(res.data).map((key) => {
          return { ...res.data[key], id: key };
        });
        setAbbreviations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className={loadingStyle}>
          <Loading />
        </div>
      ) : (
        <AbbreviationList abbreviations={abbreviations} />
      )}
    </div>
  );
};

export default witHeader(withError(Home, axios));
