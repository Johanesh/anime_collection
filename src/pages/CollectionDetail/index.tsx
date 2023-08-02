import AnimeData from "@/components/features/AnimeData";
import CollectionHeadline from "@/components/features/CollectionHeadline";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";

export default function CollectionDataDetail() {
    return (
        <Box width="100%" color="#000">
            <Box padding="0 16px">
                <CollectionHeadline>
                    <Grid margin="16px 0 0" templateCol="auto auto auto auto">
                        {
                            [...Array(12)].map((item, index) => (
                                <AnimeData isCanRemove key={index} />
                            ))
                        }
                    </Grid>
                </CollectionHeadline>
            </Box>
        </Box>
    )
};