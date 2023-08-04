interface GetAnimesQuery {
    id?: number,
    page?: number,
    perPage?: number,
    search?: string,
}

interface AnimeListResponse {
    Page: {
        media: {
            id: number,
            averageScore: number,
            trending: number,
            popularity: number,
            bannerImage: string,
            coverImage: {
                extraLarge: string,
                large: string,
                medium: string,
            },
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
            studios: {
                nodes: {
                    name: string,
                }[],
            },
            title: {
                userPreferred: string,
            }
        }[],
        pageInfo: {
            currentPage: number,
            lastPage: number,
        }
    }
}