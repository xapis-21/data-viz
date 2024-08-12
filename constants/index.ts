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

//eastern curve data
export const easternData = [
  { name: "1980", number: 0.9 },
  { name: "1981", number: 0.4 },
  { name: "1982", number: 5.7 },
  { name: "1983", number: 12.3 },
  { name: "1984", number: 39.5 },
  { name: "1985", number: 19.9 },
  { name: "1986", number: 3.1 },
  { name: "1987", number: 2.4 },
  { name: "1988", number: 0.4 },
  { name: "1989", number: 8.6 },
  { name: "1990", number: 3.2 },
  { name: "1991", number: 0.1 },
  { name: "1992", number: 15.8 },
  { name: "1993", number: 7.2 },
  { name: "1994", number: 16.2 },
  { name: "1995", number: 10.6 },
  { name: "1996", number: 0.9 },
  { name: "1997", number: 22.4 },
  { name: "1998", number: 18.9 },
  { name: "1999", number: 3.5 },
  { name: "2000", number: 9.1 },
  { name: "2001", number: 27.6 },
  { name: "2002", number: 14.3 },
  { name: "2003", number: 6.8 },
  { name: "2004", number: 31.2 },
  { name: "2005", number: 1.7 },
  { name: "2006", number: 20.5 },
  { name: "2007", number: 11.9 },
  { name: "2008", number: 35.8 },
  { name: "2009", number: 4.6 },
  { name: "2010", number: 29.3 },
  { name: "2011", number: 13.7 },
  { name: "2012", number: 25.1 },
  { name: "2013", number: 17.4 },
  { name: "2014", number: 8.3 },
  { name: "2015", number: 33.9 },
  { name: "2016", number: 2.8 },
  { name: "2017", number: 23.6 },
  { name: "2018", number: 37.2 },
  { name: "2019", number: 6.1 },
  { name: "2020", number: 19.5 },
  { name: "2021", number: 30.7 },
  { name: "2022", number: 16.8 },
];

//western curve data
export const westernData = [
  { name: "1980", number: 0.9 },
  { name: "1981", number: 0.4 },
  { name: "1982", number: 5.7 },
  { name: "1983", number: 12.3 },
  { name: "1984", number: 39.5 },
  { name: "1985", number: 19.9 },
  { name: "1986", number: 3.1 },
  { name: "1987", number: 2.4 },
  { name: "1988", number: 0.4 },
  { name: "1989", number: 8.6 },
  { name: "1990", number: 3.2 },
  { name: "1991", number: 0.1 },
  { name: "1992", number: 15.8 },
  { name: "1993", number: 7.2 },
  { name: "1994", number: 16.2 },
  { name: "1995", number: 10.6 },
  { name: "1996", number: 0.9 },
  { name: "1997", number: 22.4 },
  { name: "1998", number: 18.9 },
  { name: "1999", number: 3.5 },
  { name: "2000", number: 9.1 },
  { name: "2001", number: 27.6 },
  { name: "2002", number: 14.3 },
  { name: "2003", number: 6.8 },
  { name: "2004", number: 31.2 },
  { name: "2005", number: 1.7 },
  { name: "2006", number: 20.5 },
  { name: "2007", number: 11.9 },
  { name: "2008", number: 35.8 },
  { name: "2009", number: 4.6 },
  { name: "2010", number: 29.3 },
  { name: "2011", number: 13.7 },
  { name: "2012", number: 25.1 },
  { name: "2013", number: 17.4 },
  { name: "2014", number: 8.3 },
  { name: "2015", number: 33.9 },
  { name: "2016", number: 2.8 },
  { name: "2017", number: 23.6 },
  { name: "2018", number: 37.2 },
  { name: "2019", number: 6.1 },
  { name: "2020", number: 19.5 },
  { name: "2021", number: 30.7 },
  { name: "2022", number: 16.8 },
];
//southern curve data
export const southernData = [
  { name: "1980", number: 12.7 },
  { name: "1981", number: 5.3 },
  { name: "1982", number: 28.9 },
  { name: "1983", number: 17.2 },
  { name: "1984", number: 33.6 },
  { name: "1985", number: 9.8 },
  { name: "1986", number: 22.4 },
  { name: "1987", number: 3.5 },
  { name: "1988", number: 36.1 },
  { name: "1989", number: 14.9 },
  { name: "1990", number: 26.7 },
  { name: "1991", number: 7.2 },
  { name: "1992", number: 31.8 },
  { name: "1993", number: 19.5 },
  { name: "1994", number: 1.6 },
  { name: "1995", number: 38.3 },
  { name: "1996", number: 11.4 },
  { name: "1997", number: 24.9 },
  { name: "1998", number: 8.7 },
  { name: "1999", number: 34.2 },
  { name: "2000", number: 16.3 },
  { name: "2001", number: 29.5 },
  { name: "2002", number: 4.8 },
  { name: "2003", number: 37.9 },
  { name: "2004", number: 13.1 },
  { name: "2005", number: 25.6 },
  { name: "2006", number: 6.9 },
  { name: "2007", number: 32.4 },
  { name: "2008", number: 20.7 },
  { name: "2009", number: 2.3 },
  { name: "2010", number: 39.1 },
  { name: "2011", number: 10.5 },
  { name: "2012", number: 27.8 },
  { name: "2013", number: 15.9 },
  { name: "2014", number: 35.2 },
  { name: "2015", number: 8.1 },
  { name: "2016", number: 23.4 },
  { name: "2017", number: 18.6 },
  { name: "2018", number: 30.9 },
  { name: "2019", number: 7.5 },
  { name: "2020", number: 33.8 },
  { name: "2021", number: 21.2 },
  { name: "2022", number: 0.7 },
];

//central curve data

export const centralData = [
  { name: "1980", number: 18.3 },
  { name: "1981", number: 7.9 },
  { name: "1982", number: 32.6 },
  { name: "1983", number: 11.4 },
  { name: "1984", number: 25.7 },
  { name: "1985", number: 3.8 },
  { name: "1986", number: 36.9 },
  { name: "1987", number: 14.2 },
  { name: "1988", number: 29.5 },
  { name: "1989", number: 6.1 },
  { name: "1990", number: 38.4 },
  { name: "1991", number: 21.6 },
  { name: "1992", number: 9.3 },
  { name: "1993", number: 33.8 },
  { name: "1994", number: 16.7 },
  { name: "1995", number: 27.2 },
  { name: "1996", number: 1.5 },
  { name: "1997", number: 39.1 },
  { name: "1998", number: 23.4 },
  { name: "1999", number: 12.8 },
  { name: "2000", number: 35.6 },
  { name: "2001", number: 8.7 },
  { name: "2002", number: 30.9 },
  { name: "2003", number: 5.2 },
  { name: "2004", number: 37.3 },
  { name: "2005", number: 19.8 },
  { name: "2006", number: 10.5 },
  { name: "2007", number: 34.1 },
  { name: "2008", number: 15.9 },
  { name: "2009", number: 28.6 },
  { name: "2010", number: 2.4 },
  { name: "2011", number: 39.5 },
  { name: "2012", number: 22.1 },
  { name: "2013", number: 13.6 },
  { name: "2014", number: 31.2 },
  { name: "2015", number: 7.3 },
  { name: "2016", number: 26.8 },
  { name: "2017", number: 4.6 },
  { name: "2018", number: 36.4 },
  { name: "2019", number: 17.5 },
  { name: "2020", number: 24.9 },
  { name: "2021", number: 0.9 },
  { name: "2022", number: 20.3 },
];

//northern curve data
export const northernData = [
  { name: "1980", number: 18.3 },
  { name: "1981", number: 7.9 },
  { name: "1982", number: 32.6 },
  { name: "1983", number: 11.2 },
  { name: "1984", number: 25.7 },
  { name: "1985", number: 3.5 },
  { name: "1986", number: 36.9 },
  { name: "1987", number: 14.8 },
  { name: "1988", number: 29.1 },
  { name: "1989", number: 6.4 },
  { name: "1990", number: 38.2 },
  { name: "1991", number: 21.5 },
  { name: "1992", number: 9.7 },
  { name: "1993", number: 33.8 },
  { name: "1994", number: 16.1 },
  { name: "1995", number: 27.3 },
  { name: "1996", number: 4.6 },
  { name: "1997", number: 39.4 },
  { name: "1998", number: 13.5 },
  { name: "1999", number: 30.7 },
  { name: "2000", number: 8.2 },
  { name: "2001", number: 35.1 },
  { name: "2002", number: 19.6 },
  { name: "2003", number: 2.8 },
  { name: "2004", number: 37.5 },
  { name: "2005", number: 22.9 },
  { name: "2006", number: 10.3 },
  { name: "2007", number: 31.4 },
  { name: "2008", number: 15.7 },
  { name: "2009", number: 26.8 },
  { name: "2010", number: 5.1 },
  { name: "2011", number: 38.7 },
  { name: "2012", number: 12.4 },
  { name: "2013", number: 28.6 },
  { name: "2014", number: 7.3 },
  { name: "2015", number: 34.9 },
  { name: "2016", number: 20.2 },
  { name: "2017", number: 1.6 },
  { name: "2018", number: 36.3 },
  { name: "2019", number: 23.5 },
  { name: "2020", number: 9.1 },
  { name: "2021", number: 32.8 },
  { name: "2022", number: 17.4 },
];

export const datasets: { label: string; value: any }[] = [
  {
    label: "N",
    value: northernData,
  },
  {
    label: "W",
    value: westernData,
  },
  {
    label: "C",
    value: centralData,
  },
  {
    label: "E",
    value: easternData,
  },
  {
    label: "S",
    value: southernData,
  },
];
