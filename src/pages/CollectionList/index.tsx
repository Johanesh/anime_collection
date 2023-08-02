import AnimeData from "@/components/features/AnimeData";
import CollectionHeadline from "@/components/features/CollectionHeadline";
import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";

export default function CollectionList() {
    return (
        <Box width="100%" color="#000">
            <Box padding="0 16px">
                <CollectionHeadline>
                    {
                        [...Array(12)].map((item, index) => (
                            <Box display="inline-block" width="200px" key={index}>
                                <AnimeData isCanRemove />
                            </Box>
                        ))
                    }
                </CollectionHeadline>
                <CollectionHeadline>
                    {
                        [...Array(2)].map((item, index) => (
                            <Box display="inline-block" width="200px" key={index}>
                                <AnimeData isCanRemove />
                            </Box>
                        ))
                    }
                </CollectionHeadline>
                <CollectionHeadline>
                    {
                        [...Array(3)].map((item, index) => (
                            <Box display="inline-block" width="200px" key={index}>
                                <AnimeData isCanRemove />
                            </Box>
                        ))
                    }
                </CollectionHeadline>
                <CollectionHeadline isCreateNew>
                    <Grid templateCol="auto" justify="center">
                        <Box width="200px" backgroundColor="#eaeaea" padding="125% 0 0" cursor="pointer">
                            <AbsoluteBox top="50%" left="50%" transform="translate(-50%, -50%)" />
                        </Box>
                    </Grid>
                </CollectionHeadline>
            </Box>
        </Box>
    )
};