import AnimeData from "@/components/features/AnimeData";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";
import TextHeading from "@/components/user-interfaces/TextHeading";

export default function AnimeList() {
    return (
        <Box width="100%" color="#000">
            <Box padding="0 16px">
                <TextHeading as="h2" textAlign="center">
                    Anime List
                </TextHeading>
                <Grid margin="16px 0 0" templateCol="25% 25% 25% 25%" gap="8px">
                    {
                        [...Array(6)].map((item, index) => (
                            <AnimeData key={index} />
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
};