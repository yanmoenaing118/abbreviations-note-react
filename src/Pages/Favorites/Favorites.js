import React from "react";
import AbbreviationList from "../../Abbreviation/AbbreviationList/AbbreviationList";

const db = [
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
    abbreviation: "DNS",
    stands_for: "Domain Name System",
    description:
      "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
  },

  {
    id: 6,
    abbreviation: "IP",
    stands_for: "Internet Protocol",
    description:
      "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
  },
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
];

const Favorites = () => {
  return (
    <div>
      <AbbreviationList abbreviations={db} />
    </div>
  );
};

export default Favorites;
