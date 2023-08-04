/** @jsxImportSource @emotion/react */
'use client'

import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox"
import Box from "@/components/user-interfaces/Box"
import TextHeading from "@/components/user-interfaces/TextHeading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faBan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"

export default function AnimeData({
    data,
    isEmpty,
    isCanRemove,
}: AnimeDataProps) {
    return (
        <Box>
            <Box padding="4px">
                <Box width="100%" backgroundColor="#eaeaea" padding="125% 0 0" cursor={!isEmpty ? "pointer" : "default"}>
                    {
                        !isEmpty ? (
                            <Link href={`/detail/${data?.id}`} target="_blank">
                                <AbsoluteBox backgroundImg={`url(${data?.bannerImage})`} backgroundSize="cover" top="0" right="0" bottom="0" left="0" />
                            </Link>
                        ) : (
                            <AbsoluteBox top="50%" left="50%" transform="translate(-50%, -50%)" color="red">
                                <FontAwesomeIcon
                                    icon={faBan}
                                    css={{
                                        width: '50px',
                                        height: '50px'
                                    }}
                                />
                            </AbsoluteBox>
                        )
                    }
                    {
                        isCanRemove && (
                            <AbsoluteBox padding="4px" backgroundColor="#fff" top="5px" right="5px">
                                <FontAwesomeIcon icon={faTrash}/>
                            </AbsoluteBox>
                        )
                    }
                </Box>
                {
                    !isEmpty ? (
                        <TextHeading as="h3" height="40px" overflow="hidden" textOverflow="ellipsis" margin="8px 0 16px">
                            <Link href={`/detail/${data?.id}`} target="_blank">
                                {data?.title}
                            </Link>
                        </TextHeading>
                    ) : (
                        <TextHeading as="h3" textAlign="center" height="40px" overflow="hidden" textOverflow="ellipsis" margin="8px 0 16px">
                            Data Not Found
                        </TextHeading>
                    )
                }
            </Box>
        </Box>
    )
};