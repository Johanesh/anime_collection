interface AnimeDetailProps {
    id?: string,
}

interface AnimeDataType {
    id: number,
    averageScore: number,
    trending: number,
    popularity: number,
    bannerImage: string,
    coverImage: string,
    description: string,
    episodes: number,
    format: string,
    genres: string[],
    seasonYear: number,
    status: string,
    streamingEpisodes: {
        thumbnail: string,
        title: string,
        url: string,
    }[],
    studios: string[],
    title: string,
}