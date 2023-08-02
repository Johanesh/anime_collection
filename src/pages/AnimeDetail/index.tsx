/** @jsxImportSource @emotion/react */
'use client'

import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox";
import Box from "@/components/user-interfaces/Box";
import Grid from "@/components/user-interfaces/Grid";
import Text from "@/components/user-interfaces/Text";
import TextHeading from "@/components/user-interfaces/TextHeading";
import { faHeartCirclePlus, faAward, faChartSimple, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AnimeDataDetail() {
    return (
        <Box width="100%" margin="0 0 24px" color="#000">
            <Box backgroundImg="url('https://cdn.myanimelist.net/images/anime/1079/133529.jpg')" backgroundSize="cover" backgroundPosition="center" padding="50% 0 0">
                <AbsoluteBox top="0" right="0" bottom="0" left="0" backgroundColor="rgba(0,0,0,0.5)" />
                <AbsoluteBox top="0" right="0" bottom="0" left="0" background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)" />
                <AbsoluteBox bottom="-15%" left="50%" transform="translateX(-50%)">
                    <Box width="250px" padding="125% 0 0">
                        <AbsoluteBox top="0" right="0" bottom="0" left="0" backgroundImg="url('https://cdn.myanimelist.net/images/anime/1079/133529.jpg')" backgroundSize="cover" />
                    </Box>
                </AbsoluteBox>
            </Box>
            <Box padding="10% 0 0">
                <AbsoluteBox top="10px" right="10px" cursor="pointer">
                    <FontAwesomeIcon icon={faHeartCirclePlus} />
                </AbsoluteBox>
                <Box padding="0 8px">
                    <Grid templateCol="70% 30%" gap="8px">
                        <Box>
                            <Box>
                                <Text>
                                    [Type] - [Year]
                                </Text>
                            </Box>
                            <Box margin="8px 0">
                                <Box display="inline-block" color="#fff" backgroundColor="green" padding="4px" verticalAlign="middle">
                                    <Text fontWeight="bold">8.77</Text>
                                </Box>
                                <TextHeading display="inline-block" as="h2" margin="0 4px" verticalAlign="middle">
                                    Anime Title Here
                                </TextHeading>
                            </Box>
                            <Text display="block">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium reiciendis commodi non obcaecati a. Incidunt cumque ducimus nihil esse sint repellendus sunt, natus, inventore debitis aliquam doloremque, illo quia sit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium reiciendis commodi non obcaecati a. Incidunt cumque ducimus nihil esse sint repellendus sunt, natus, inventore debitis aliquam doloremque, illo quia sit?
                            </Text>
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
                                    [Status Text]
                                </Text>
                            </Box>
                            <Box margin="0 0 16px">
                                <Text display="block" fontWeight="bold" margin="0 0 8px">
                                    Studio
                                </Text>
                                <Text display="block">
                                    [Studio Text]
                                </Text>
                            </Box>
                            <Box margin="0 0 16px">
                                <Text display="block" fontWeight="bold" margin="0 0 8px">
                                    Genre(s)
                                </Text>
                                <Text display="block">
                                    [Genre Text Array]
                                </Text>
                            </Box>
                            <Box>
                                <Box display="inline-block" margin="0 8px 0 0">
                                    <FontAwesomeIcon icon={faAward} /> 123123
                                </Box>
                                <Box display="inline-block">
                                    <FontAwesomeIcon icon={faChartSimple} /> 123123
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Box margin="16px 0">
                        <Box margin="0 0 8px">
                            <TextHeading as="h3">
                                Trailer
                            </TextHeading>
                        </Box>
                        <Box>
                            <Box display="inline-block">
                                <AbsoluteBox top="50%" left="50%" transform="translate(-50%, -50%)" color="maroon">
                                    <FontAwesomeIcon 
                                        icon={faPlayCircle}
                                        css={{
                                            width: '50px',
                                            height: '50px'
                                        }}
                                    />
                                </AbsoluteBox>
                                <img src={"https://cdn.myanimelist.net/images/anime/1079/133529.jpg"} alt="trailer" />
                            </Box>
                        </Box>
                    </Box>
                    <Box margin="16px 0">
                        <Box padding="0 0 16px" borderBottom="1px solid #000">
                            <TextHeading as="h3">
                                Episodes (00)
                            </TextHeading>
                        </Box>
                        <Box padding="8px 0" borderBottom="1px solid #000">
                            <TextHeading as="h3" margin="0 0 8px">
                                [Episode Title]
                            </TextHeading>
                            <Text>
                                24 October 2023
                            </Text>
                            <AbsoluteBox top="50%" transform="translateY(-50%)" right="0">
                                <Box display="inline-block" color="#fff" backgroundColor="green" padding="4px" verticalAlign="middle">
                                    <Text fontWeight="bold">8.77</Text>
                                </Box>
                            </AbsoluteBox>
                        </Box>
                        <Box padding="8px 0" borderBottom="1px solid #000">
                            <TextHeading as="h3" margin="0 0 8px">
                                [Episode Title]
                            </TextHeading>
                            <Text>
                                24 October 2023
                            </Text>
                            <AbsoluteBox top="50%" transform="translateY(-50%)" right="0">
                                <Box display="inline-block" color="#fff" backgroundColor="green" padding="4px" verticalAlign="middle">
                                    <Text fontWeight="bold">8.77</Text>
                                </Box>
                            </AbsoluteBox>
                        </Box>
                        <Box padding="8px 0" borderBottom="1px solid #000">
                            <TextHeading as="h3" margin="0 0 8px">
                                [Episode Title]
                            </TextHeading>
                            <Text>
                                24 October 2023
                            </Text>
                            <AbsoluteBox top="50%" transform="translateY(-50%)" right="0">
                                <Box display="inline-block" color="#fff" backgroundColor="green" padding="4px" verticalAlign="middle">
                                    <Text fontWeight="bold">8.77</Text>
                                </Box>
                            </AbsoluteBox>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};