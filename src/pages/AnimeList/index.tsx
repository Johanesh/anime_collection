'use client'

import { useContext, useEffect, useState } from "react";
import AnimeData from "@/components/features/AnimeData";
import Paginate from "@/components/features/Paginate";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";
import TextHeading from "@/components/user-interfaces/TextHeading";
import { GET_ANIMES } from "@/query/AnimeList";
import { useQuery } from '@apollo/client';
import { AnimesModel } from "./index.modal";
import { SearchContext } from "@/context/Search";

const AnimeList = () => {
    const {searchAnime} = useContext(SearchContext);
    const [filter, setFilter] = useState<AnimeListFilterProps>({
        page: 1,
        lastPage: 1,
        search: "",
    })
    const { loading, error, data } = useQuery(GET_ANIMES(filter), {
        onCompleted: (dataQuery: AnimeListResponse) => {
            let filterObj = Object.assign({}, filter);
            filterObj["page"] = dataQuery.Page.pageInfo.currentPage;
            filterObj["lastPage"] = dataQuery.Page.pageInfo.lastPage;

            setFilter(filterObj);
        },
    });
    const animesData: AnimeListModel = data ? AnimesModel(data) : AnimesModel();

    useEffect(() => {
        let filterObj = Object.assign({}, filter)
        filterObj["page"] = 1;
        filterObj["search"] = searchAnime;
        setFilter(filterObj);
    }, [searchAnime]);

    const handlePagination = (step: number) => {
        let filterObj = Object.assign({}, filter)
        filterObj["page"] = step;
        setFilter(filterObj);
    };

    return (
        <Box width="100%" color="#000">
            <Box padding="0 16px 40px">
                <TextHeading as="h2" margin="16px 0 0" textAlign="center">
                    Anime List
                </TextHeading>
                <Box>
                    {
                        loading ? (
                            <Box margin="15% 0" textAlign="center">
                                Loading ...
                            </Box>
                        ) : (
                            <Grid margin="16px 0 0" templateCol={"25% 25% 25% 25%"}>
                                {
                                    animesData.data.length > 0 && (
                                        <>
                                            {
                                                animesData.data.map((item, index) => (
                                                    <AnimeData data={item} key={index} />
                                                ))
                                            }
                                        </>
                                    )
                                }
                                {
                                    (searchAnime && animesData.data.length === 0) && (
                                        <AnimeData isEmpty />
                                    )
                                }
                            </Grid>
                        )
                    }
                </Box>
            </Box>
            <Paginate
                paginate={filter}
                handlePagination={handlePagination}
            />
        </Box>
    )
}

export default AnimeList;