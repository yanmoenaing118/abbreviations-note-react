import React, { useState, useEffect } from "react";

import AbbreviationList from "./../../Abbreviation/AbbreviationList/AbbreviationList";

const db = [
  {
    id: 0,
    abbreviation: "DNS",
    stands_for: "Domain Name System",
    description:
      "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
  },

  {
    id: 1,
    abbreviation: "IP",
    stands_for: "Internet Protocol",
    description:
      "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
  },

  {
    id: 2,
    abbreviation: "TCP",
    stands_for: "Transmition Control Protocol",
    description:
      "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
  },
  {
    id: 3,
    abbreviation: "DNS",
    stands_for: "Domain Name System",
    description:
      "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
  },

  {
    id: 4,
    abbreviation: "IP",
    stands_for: "Internet Protocol",
    description:
      "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
  },

  {
    id: 5,
    abbreviation: "TCP",
    stands_for: "Transmition Control Protocol",
    description:
      "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
  },
  {
    id: 6,
    abbreviation: "DNS",
    stands_for: "Domain Name System",
    description:
      "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
  },

  {
    id: 7,
    abbreviation: "IP",
    stands_for: "Internet Protocol",
    description:
      "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
  },

  {
    id: 8,
    abbreviation: "TCP",
    stands_for: "Transmition Control Protocol",
    desc:
      "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
  },
];

const Home = (props) => {
  let [abbreviations, setAbbreviations] = useState(db);
  useEffect(() => {
    fetch("http://localhost:9000/api/v1/abbreviations")
      .then((res) => res.json())
      .then((json) => {
        setAbbreviations(json.data.results);
      });
  }, []);
  return (
    <div>
      <AbbreviationList abbreviations={abbreviations} />
    </div>
  );
};

export default Home;
