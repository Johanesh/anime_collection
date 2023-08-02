/** @jsxImportSource @emotion/react */
'use client'

import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox"
import Box from "@/components/user-interfaces/Box"
import TextHeading from "@/components/user-interfaces/TextHeading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"

export default function AnimeData({
    isCanRemove,
}: AnimeDataProps) {
    return (
        <Box>
            <Box padding="4px">
                <Box width="100%" backgroundColor="#eaeaea" padding="125% 0 0" cursor="pointer">
                    <Link href="/detail/asd" target="_blank">
                        <AbsoluteBox backgroundImg="url('https://cdn.myanimelist.net/images/anime/1079/133529.jpg')" backgroundSize="cover" top="0" right="0" bottom="0" left="0" />
                    </Link>
                    {
                        isCanRemove && (
                            <AbsoluteBox padding="4px" backgroundColor="#fff" top="5px" right="5px">
                                <FontAwesomeIcon icon={faTrash}/>
                            </AbsoluteBox>
                        )
                    }
                </Box>
                <TextHeading as="h3" height="40px" overflow="hidden" textOverflow="ellipsis" margin="8px 0 16px">
                    <Link href="/detail/asd" target="_blank">
                        Title Here
                    </Link>
                </TextHeading>
            </Box>
        </Box>
    )
};