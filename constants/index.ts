export const countryList = [
  "Angola",
  "Burundi",
  "Benin",
  "Burkina Faso",
  "Botswana",
  "Central African Republic",
  "Côte d'Ivoire",
  "Cameroon",
  "Congo, Dem. Rep. of",
  "Congo, Republic of",
  "Comoros",
  "Cape Verde",
  "Djibouti",
  "Algeria",
  "Egypt",
  "Ethiopia",
  "Gabon",
  "Ghana",
  "Guinea",
  "Gambia, The",
  "Guinea-Bissau",
  "Kenya",
  "Liberia",
  "Libya",
  "Lesotho",
  "Morocco",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "São Tomé and Príncipe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Swaziland",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

 export const regionColors = {
   "Western Africa": "#4CAF50", // Green
   "Southern Africa": "#2196F3", // Blue
   "Northern Africa": "#F44336", // Red
   "Eastern Africa": "#9C27B0", // Purple
   "Central Africa": "#FFEB3B", // Yellow
 };

//Please refer to the countries in the above array
export const regionList = [
  {
    id: "africa-wide",
    name: "Africa wide",
    countries: [...countryList],
  },
  {
    id: "western-africa",
    name: "Western Africa",
    countries: [
      { name: "Benin", image: "/images/benin.png", code: "bj" },
      { name: "Burkina Faso", image: "/images/burkina-faso.webp", code: "bf" },
      {
        name: "Côte d'Ivoire",
        image: "/images/cote-d-ivoire.webp",
        code: "ci",
      },
      { name: "Cape Verde", image: "/images/cape-verde.webp", code: "cv" },
      { name: "Ghana", image: "/images/ghana.webp", code: "gh" },
      { name: "Guinea", image: "/images/guinea.png", code: "gn" },
      { name: "Gambia, The", image: "/images/gambia.webp", code: "gm" },
      { name: "Guinea-Bissau", image: "/images/guinea-bissau.png", code: "gw" },
      { name: "Liberia", image: "/images/liberia.png", code: "lr" },
      { name: "Mali", image: "/images/mali.webp", code: "ml" },
      { name: "Mauritania", image: "/images/mauritania.webp", code: "mr" },
      { name: "Niger", image: "/images/niger.png", code: "ne" },
      { name: "Nigeria", image: "/images/nigeria.png", code: "ng" },
      { name: "Senegal", image: "/images/senegal.webp", code: "sn" },
      { name: "Sierra Leone", image: "/images/sierra-leone.png", code: "sl" },
      { name: "Togo", image: "/images/togo.webp", code: "tg" },
    ],
  },
  {
    id: "southern-africa",
    name: "Southern Africa",
    countries: [
      { name: "Angola", image: "/images/angola.webp", code: "ao" },
      { name: "Botswana", image: "/images/botswana.png", code: "bw" },
      { name: "Lesotho", image: "/images/lesotho.webp", code: "ls" },
      { name: "Mozambique", image: "/images/mozambique.png", code: "mz" },
      { name: "Namibia", image: "/images/namibia.png", code: "na" },
      { name: "South Africa", image: "/images/south-africa.png", code: "za" },
      { name: "Eswatini", image: "/images/eswatini.webp", code: "sz" },
      { name: "Zambia", image: "/images/zambia.png", code: "zm" },
      { name: "Zimbabwe", image: "/images/zimbabwe.png", code: "zw" },
    ],
  },
  {
    id: "northern-africa",
    name: "Northern Africa",
    countries: [
      { name: "Algeria", image: "/images/algeria.webp", code: "dz" },
      { name: "Egypt", image: "/images/egypt.png", code: "eg" },
      { name: "Libya", image: "/images/libya.png", code: "ly" },
      { name: "Morocco", image: "/images/morocco.png", code: "ma" },
      { name: "Tunisia", image: "/images/tunisia.png", code: "tn" },
    ],
  },
  {
    id: "eastern-africa",
    name: "Eastern Africa",
    countries: [
      { name: "Burundi", image: "/images/burundi.png", code: "bi" },
      { name: "Comoros", image: "/images/comoros.webp", code: "km" },
      { name: "Djibouti", image: "/images/djibouti.webp", code: "dj" },
      { name: "Eritrea", image: "/images/eritrea.png", code: "er" },
      { name: "Ethiopia", image: "/images/ethiopia.png", code: "et" },
      { name: "Kenya", image: "/images/kenya.webp", code: "ke" },
      { name: "Madagascar", image: "/images/madagascar.png", code: "mg" },
      { name: "Malawi", image: "/images/malawi.png", code: "mw" },
      { name: "Mauritius", image: "/images/mauritius.png", code: "mu" },
      { name: "Rwanda", image: "/images/rwanda.jpg", code: "rw" },
      { name: "Seychelles", image: "/images/seychelles.webp", code: "sc" },
      { name: "Somalia", image: "/images/somalia.webp", code: "so" },
      { name: "South-Sudan", image: "/images/south-sudan.webp", code: "ss" },
      { name: "Sudan", image: "/images/sudan.png", code: "sd" },
      { name: "Tanzania", image: "/images/tanzania.png", code: "tz" },
      { name: "Uganda", image: "/images/uganda.webp", code: "ug" },
    ],
  },
  {
    id: "central-africa",
    name: "Central Africa",
    countries: [
      {
        name: "Central African Republic",
        image: "/images/central-african-republic.png",
        code: "cf",
      },
      { name: "Chad", image: "", code: "td" },
      { name: "Equatorial Guinea", image: "", code: "gq" },
      { name: "Cameroon", image: "/images/cameroon.png", code: "cm" },
      { name: "Congo, Dem. Rep. of", image: "/images/drc.jpg", code: "cd" },
      { name: "Congo, Republic of", image: "/images/congo.png", code: "cg" },
      { name: "Gabon", image: "/images/gabon.webp", code: "ga" },
      {
        name: "São Tomé and Príncipe",
        image: "/images/sao-tome-and-principe.webp",
        code: "st",
      },
    ],
  },
];
export const legendData = [
  { color: "#08519C", label: "50 or more" },
  { color: "#3182BD", label: "30 - 50" },
  { color: "#6BAED6", label: "10 - 30" },
  { color: "#BDD7E7", label: "5 - 7.5" },
  { color: "#E6EFF4", label: "0 - 5" },
  { color: "#808080", label: "no data" },
];
