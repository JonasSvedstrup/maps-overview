export type MapsData = {
  name: string;
  dlc: string;
  theme: string;
  buildableArea: number;
  connections: {
    highway: boolean;
    railway: boolean;
    ship: boolean;
    air: boolean;
  };
  milestones: number[];
  hasImages: boolean;
};

export type Playlists = {
  author: string;
  title: string;
  videos: number;
  playlistUrl: string;
  year: number;
};

export type PlaylistsData = {
  name: string;
  playlists: Playlists[];
};

export type AuthorData = {
  name: string;
  profileLink: string;
};

export type ColDefs = {
  field: string;
  width?: number;
  cellRenderer?: unknown;
  hide?: boolean;
};

export type MapsRowData = {
  name: string;
  dlc: string;
  buildableArea: number;
  theme: string;
  littleHamlet: string;
  megalopolis: string;
  highway: boolean;
  railway: boolean;
  ship: boolean;
  air: boolean;
  link: string;
};

export type PlaylistRowData = {
  name: string;
  author: string;
  playlistTitle: string;
  videos: number;
  year: number;
  link: string;
  linkProfile: string;
  linkPlaylist: string;
};
