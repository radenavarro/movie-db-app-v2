export type Movie = {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    date?: string;
}

export type StorageMovie = {
    items: Movie[];
    pages: number;
}

export type MovieResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export type Tvshow = {
    name?: string;
    id?: number;
    overview?: string;
    poster_path?: string;
    first_air_date?: string;
    vote_average?: number;
    vote_count?: number;
    date?: string;
}

export type StorageTvshow = {
    items: Tvshow[];
    pages: number;
}

export type TvshowResponse = {
    page: number;
    results: Tvshow[];
    total_pages: number;
    total_results: number;
}

export type StoredKeys = 'films' | 'series'