export interface Artist {
    _id: string;
    artist_name: string;
    image: string | null;
    description?: string;
}

export type ArtistWithoutId = Omit<Artist, '_id'>;