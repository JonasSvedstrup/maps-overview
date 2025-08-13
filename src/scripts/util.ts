import type { MapsData } from "./types";

export const formatMapName = (str: string) =>
  str
    .replace("-", " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
export const formatMapShort = (str: string) =>
  str.replace(" ", "-").toLowerCase();
export const formatMapLink = (str: string) =>
  `map?name=${str.toLowerCase().replace(" ", "-")}`;
export const formatNumer = (number: number) =>
  number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";
export const linkField = (link: string, value: string) =>
  `<a href="${link}">${value}</a>`;
export const getQueryString = (n: string) => {
  const half = location.search.split(n + "=")[1];
  return half !== undefined ? decodeURIComponent(half.split("&")[0]) : null;
};
export const getSelectedMap = () => getQueryString("name");

export const navs = [
  { name: "Overview", path: "/" },
  { name: "Map", path: "/map?name=roslyn-peninsula" },
  { name: "Playthroughs", path: "/playthroughs" },
  { name: "Compare", path: "/compare" },
];
export const mapViews: string[] = [
  "top",
  "tiles",
  "start",
  "resources",
  "height",
  "wind",
  "fish",
  "transport",
];
export const Connections = {
  Highway: `Highway`,
  Railway: `Railway`,
  Ship: `Ship`,
  Air: `Air`,
};

export const pickRandomMap = (mapsData: MapsData[]) => {
  const mapsSplice = mapsData.filter(map => map.hasImages === true);
  const randomNumber = Math.floor(Math.random() * mapsSplice.length);
  location.href = `map?name=${formatMapShort(mapsSplice[randomNumber].name)}`;
};

export const pickSelectedMap = (map: string) => {
  location.href = `map?name=${map}`;
};

export const init = () => {
  let title = "";
  switch (location.pathname) {
    case "/":
      title = "Map Overview - Cities Skylines";
      break;
    case "/map":
      title = "Map Details - Cities Skylines";
      break;
    case "/playthroughs":
      title = "Let's Play - Playlists - Cities Skylines";
      break;
    case "/compare":
      title = "Maps Compare - Cities Skylines";
      break;
  }
  document.title = title;
};
