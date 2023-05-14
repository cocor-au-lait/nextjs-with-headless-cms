type StrapiData<T> = {
  id: number;
  attributes: T;
};

export type StrapiContent<T> = {
  data: T extends any[] ? StrapiData<T>[] : StrapiData<T>;
  meta?: unknown;
};

export interface Media {
  name: string;
  url: string;
}
