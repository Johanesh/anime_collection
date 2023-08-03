import { gql } from "@apollo/client";

export const GET_ANIMES = ({
    id,
    page,
    perPage,
    search,
}: GetAnimesQuery) => {
    return (gql`
        query GetAnimes {
            Page (page: ${page || 0}, perPage: ${perPage || 12}) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                }
                media (type: ANIME ${search ? `,search: ${search}` : ""} ${id ? `,id: ${id}` : ""}) {
                    id
                    title {
                        english
                    }
                    bannerImage
                }
            }
        }
    `)
};