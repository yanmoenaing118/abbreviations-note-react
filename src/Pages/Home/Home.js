import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import axios from "../../axios";
import Loading from "../../components/UI/Loading/Loading";
import withError from "../../hoc/withError";
import withHeader from "../../hoc/withHeader";

import AbbreviationList from "./../../components/Abbreviation/AbbreviationList/AbbreviationList";

import { loading as loadingStyle } from "./Home.module.scss";
import NewButton from "../../components/UI/Buttons/NewButtton/NewButton";

const Home = (props) => {
  console.log(props);
  let [abbreviations, setAbbreviations] = useState([]);
  let [loading, setLoading] = useState(true);
  let mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const source = Axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const res = await axios.get("/abbreviations.json", {
          cancelToken: source.token,
        });

        const data = Object.keys(res.data).map((key) => {
          return { ...res.data[key], id: key };
        });

        if (mounted.current) {
          console.table(data);
          setAbbreviations(data);
          setLoading(false);
        }
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Cancel request", error.message);
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
          <AbbreviationList abbreviations={abbreviations} />
        )}
        <NewButton />
      </div>
    </>
  );
};

export default withError(withHeader(Home), axios);
