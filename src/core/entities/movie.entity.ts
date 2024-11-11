export interface Movie {
    id: number;
    title: string;
    desccription: string;
    release_date: Date;
    rating: number;
    backdrop: string;
    poster: string;
}

export interface FullMovie extends Movie { 
    genres: string[];
    duration: string[]
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}
