import AnimeData from "@/components/features/AnimeData";
import Paginate from "@/components/features/Paginate";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";
import TextHeading from "@/components/user-interfaces/TextHeading";
import { GET_ANIMES } from "@/query/AnimeList";
import { useQuery } from '@apollo/client';

export default function AnimeList() {
    const { loading, error, data } = useQuery(GET_ANIMES({page: 0}));

    console.log(data);

    return (
        <Box width="100%" color="#000">
            <Box padding="0 16px 40px">
                <TextHeading as="h2" textAlign="center">
                    Anime List
                </TextHeading>
                <Grid margin="16px 0 0" templateCol="auto auto auto auto">
                    {
                        [...Array(12)].map((item, index) => (
                            <AnimeData key={index} />
                        ))
                    }
                </Grid>
            </Box>
            <Paginate />
        </Box>
    )
};