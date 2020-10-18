import React, { useEffect, useState } from "react";
import axios from "../../axios";
import AbbreviationList from "../../components/Abbreviation/AbbreviationList/AbbreviationList";
import witHeader from "../../hoc/withHeader";

// const db = [
//   {
//     id: 3,
//     abbreviation: "DNS",
//     stands_for: "Domain Name System",
//     description:
//       "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
//   },

//   {
//     id: 4,
//     abbreviation: "IP",
//     stands_for: "Internet Protocol",
//     description:
//       "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
//   },
//   {
//     id: 5,
//     abbreviation: "DNS",
//     stands_for: "Domain Name System",
//     description:
//       "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
//   },

//   {
//     id: 6,
//     abbreviation: "IP",
//     stands_for: "Internet Protocol",
//     description:
//       "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
//   },
//   {
//     id: 0,
//     abbreviation: "DNS",
//     stands_for: "Domain Name System",
//     description:
//       "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
//   },

//   {
//     id: 1,
//     abbreviation: "IP",
//     stands_for: "Internet Protocol",
//     description:
//       "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
//   },

//   {
//     id: 2,
//     abbreviation: "TCP",
//     stands_for: "Transmition Control Protocol",
//     description:
//       "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
//   },
// ];

const Favorites = () => {
  let [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .get('/abbreviations.json?orderBy="favorite"&equalTo=true')
      .then((res) => {
        const data = Object.keys(res.data).map((key) => {
          return { ...res.data[key], id: key };
        });
        setFavorites(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AbbreviationList abbreviations={favorites} />
    </div>
  );
};

export default witHeader(Favorites);
