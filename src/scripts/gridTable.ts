import type { ICellRendererParams } from "ag-grid-community";
import type { AuthorData, ColDefs, MapsData, MapsRowData, PlaylistRowData, PlaylistsData } from "./types";
import { formatMapLink, formatNumer, linkField } from "./util";

export const getGridTableMapsOverviewColumns = (): ColDefs[] => [
  {
    field: "name",
    width: 150,
    cellRenderer: (params: ICellRendererParams) => linkField(params.data.link, params.value),
  },
  { field: "dlc" },
  { field: "buildableArea", width: 130 },
  { field: "theme", width: 110 },
  { field: "littleHamlet", width: 120 },
  { field: "megalopolis", width: 120 },
  { field: "highway", width: 90 },
  { field: "railway", width: 90 },
  { field: "ship", width: 90 },
  { field: "air", width: 90 },
  { field: "link", hide: true },
];

export const getGridTableMapsOverviewRows = (data: MapsData[]): MapsRowData[] => {
  const rowData: MapsRowData[] = [];

  data.forEach((d) => {
    const { milestones } = d;

    const littleHamlet = formatNumer(milestones[0]);
    const megalopolis = formatNumer(milestones[milestones.length - 1]);

    rowData.push({
      name: d.name,
      dlc: d.dlc,
      buildableArea: d.buildableArea,
      theme: d.theme,
      littleHamlet: littleHamlet,
      megalopolis: megalopolis,
      highway: d.connections.highway,
      railway: d.connections.railway,
      ship: d.connections.ship,
      air: d.connections.air,
      link: formatMapLink(d.name),
    });
  });

  return rowData;
};

export const getGridTablePlaylistsColumns = (): ColDefs[] => {
  return [
    {
      field: "name",
      cellRenderer: (params: ICellRendererParams) => linkField(params.data.link, params.value),
    },
    {
      field: "author",
      cellRenderer: (params: ICellRendererParams) => linkField(params.data.linkProfile, params.value),
    },
    {
      field: "playlistTitle",
      cellRenderer: (params: ICellRendererParams) => linkField(params.data.linkPlaylist, params.value),
      width: 500,
    },
    { field: "videos" },
    { field: "year" },
    { field: "link", hide: true },
    { field: "linkProfile", hide: true },
    { field: "linkPlaylist", hide: true },
  ];
};

export const getGridTablePlaylistsRows = (
  playlistsData: PlaylistsData[],
  authorData: AuthorData[],
  selectedMap?: string
): PlaylistRowData[] => {
  const rowData: PlaylistRowData[] = [];

  if (selectedMap) {
    playlistsData = playlistsData.filter((playlist) => playlist.name === selectedMap);
  }

  playlistsData.forEach((playlistData) => {
    const { name, playlists } = playlistData;

    playlists.forEach((playlist) => {
      const { author, title, videos, playlistUrl, year } = playlist;
      const filteredAuthor = authorData.filter((authorData) => authorData.name === author);
      const authorProfileLink = filteredAuthor[0].profileLink;

      rowData.push({
        name: name,
        author: author,
        playlistTitle: title,
        videos: videos,
        year: year,
        link: formatMapLink(name),
        linkProfile: authorProfileLink,
        linkPlaylist: playlistUrl,
      });
    });
  });

  return rowData;
};
