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
            coverImage: {
                extraLarge: string,
                large: string,
                medium: string,
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