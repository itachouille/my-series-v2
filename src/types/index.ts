// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type FetchSeriesProps = {
  query: string;
};

export type SeriesItemProps = {
  id: string;
  name: string;
  backdrop_path: string;
  year: number;
};

export type DashboardPageCardProps = {
  name: string;
  backdrop_path: string;
  saison: number;
  episode: number;
  id: string;
};
