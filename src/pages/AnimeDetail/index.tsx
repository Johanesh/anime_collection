/** @jsxImportSource @emotion/react */
'use client'

import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";
import Text from "@/components/user-interfaces/Text";
import TextHeading from "@/components/user-interfaces/TextHeading";
import { GET_ANIMES } from "@/query/AnimeList";
import { useQuery } from "@apollo/client";
import { faHeartCirclePlus, faAward, faChartSimple, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimeDataModel } from "./index.modal";
import Link from "next/link";

export default function AnimeDataDetail(props: AnimeDetailProps) {
    const {
        id
    } = props;
    const { loading, error, data } = useQuery(GET_ANIMES({id: Number(id)}));
    const animeData: AnimeDataType = data ? AnimeDataModel(data) : AnimeDataModel();

    return (
        <Box width="100%" margin="0 0 24px" color="#000">
            <Box backgroundImg={`url('${animeData.coverImage}')`} backgroundSize="cover" backgroundPosition="center" padding="50% 0 0">
                <AbsoluteBox top="0" right="0" bottom="0" left="0" backgroundColor="rgba(0,0,0,0.5)" />
                <AbsoluteBox top="0" right="0" bottom="0" left="0" background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)" />
                <AbsoluteBox bottom="-15%" left="50%" transform="translateX(-50%)">
                    <Box width="250px" padding="125% 0 0">
                        <AbsoluteBox top="0" right="0" bottom="0" left="0" backgroundImg={`url('${animeData.coverImage}')`} backgroundSize="cover" />
                    </Box>
                </AbsoluteBox>
            </Box>
            {
                loading ? (
                    <Box margin="15% 0" textAlign="center">
                        Loading ...
                    </Box>
                ) : (
                    <Box padding="10% 0 0">
                        <AbsoluteBox top="10px" right="10px" cursor="pointer">
                            <FontAwesomeIcon icon={faHeartCirclePlus} />
                        </AbsoluteBox>
                        <Box padding="0 8px">
                            <Grid templateCol="70% 30%" gap="8px">
                                <Box>
                                    <Box>
                                        <Text>
                                            {animeData.format} - {animeData.seasonYear}
                                        </Text>
                                    </Box>
                                    <Box margin="8px 0">
                                        <Box
                                            display="inline-block"
                                            color={animeData.averageScore >= 75 ? "#fff" : "#000"}
                                            backgroundColor={animeData.averageScore >= 75 ? "green" : "#eee"}
                                            padding="4px 8px"
                                            verticalAlign="middle"
                                        >
                                            <Text fontWeight="bold">{animeData.averageScore}</Text>
                                        </Box>
                                        <TextHeading display="inline-block" as="h2" margin="0 4px" verticalAlign="middle">
                                            {animeData.title}
                                        </TextHeading>
                                    </Box>
                                    <Box display="block">
                                        <div dangerouslySetInnerHTML={{ __html: animeData.description }} />
                                    </Box>
                                    <Box margin="8px 0">
                                        <Text display="block" fontWeight="bold" margin="0 0 8px">
                                            Collection(s)
                                        </Text>
                                        <Text display="block">
                                            [Collection Text Array]
                                        </Text>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box margin="0 0 16px">
                                        <Text display="block" fontWeight="bold" margin="0 0 8px">
                                            Status
                                        </Text>
                                        <Text display="block">
                                            {animeData.status}
                                        </Text>
                                    </Box>
                                    <Box margin="0 0 16px">
                                        <Text display="block" fontWeight="bold" margin="0 0 8px">
                                            Studio
                                        </Text>
                                        <Text display="block">
                                            {animeData.studios.join(", ")}
                                        </Text>
                                    </Box>
                                    <Box margin="0 0 16px">
                                        <Text display="block" fontWeight="bold" margin="0 0 8px">
                                            Genre(s)
                                        </Text>
                                        <Text display="block">
                                            {animeData.genres.join(", ")}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Box display="inline-block" margin="0 8px 0 0">
                                            <Box display="inline-block" color="orange" margin="0 4px 0 0">
                                                <FontAwesomeIcon icon={faAward} />
                                            </Box>
                                            {animeData.trending}
                                        </Box>
                                        <Box display="inline-block">
                                            <Box display="inline-block" color="lightblue" margin="0 4px 0 0">
                                                <FontAwesomeIcon icon={faChartSimple} />
                                            </Box>
                                            {animeData.popularity}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Box margin="16px 0">
                                <Box padding="0 0 16px" borderBottom="1px solid #000">
                                    <TextHeading as="h3">
                                        Episodes ({animeData.episodes})
                                    </TextHeading>
                                </Box>
                                {
                                    animeData.streamingEpisodes.map((item, index) => (
                                        <Grid key={index} padding="8px 0" borderBottom="1px solid #000" templateCol="200px auto">
                                            <Box width="100%" padding="50% 0 0">
                                                <AbsoluteBox top="0" right="0" bottom="0" left="0" backgroundImg={`url('${item.thumbnail}')`} backgroundSize="contain" backgroundPosition="center" backgroundRepeat="no-repeat" />
                                            </Box>
                                            <Grid align="center" justify="left" padding="0 8px">
                                                <Link href={item.url} target="_blank">
                                                    <TextHeading as="h3">
                                                            {item.title}
                                                    </TextHeading>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </Box>
    )
};