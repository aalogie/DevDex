export interface Developer {
    experienceYears: number;
    id: string;
    imageUrl: string;
    location: string;
    name: string;
    position: string;
    skills: Skills;
}

export interface Skills {
    communicative: number;
    efficient: number;
    immaculate: number;
    problemsolver: number;
    timely: number;
    tinker: number;
}