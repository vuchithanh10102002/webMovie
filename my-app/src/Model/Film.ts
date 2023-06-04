export class Film{
    id: number = 0;
    adult?: boolean;
    backdrop_path?: string;
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
    swiper?: any;
    belongs_to_collection?: string;
    budget?: number;
    genres?: Array<category>;
    homepage?: string;
    imdb_id?: string;
    production_companies?: Array<productionCompany>;
    revenue?: number;
    runtime?: number;
    spoken_languages?: Array<spokenLanguage>;
    status?: string;
    tagline?: string;   
}

class category {
    id?: number;
    name?: string;
}

class productionCompany {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
}

class spokenLanguage {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
}