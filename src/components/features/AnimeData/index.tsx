/** @jsxImportSource @emotion/react */
'use client'

import AbsoluteBox from "@/components/user-interfaces/AbsoluteBox"
import Box from "@/components/user-interfaces/Box"
import TextHeading from "@/components/user-interfaces/TextHeading"
import Link from "next/link"

export default function AnimeData() {
    return (
        <Box padding="4px">
            <Box width="100%" backgroundColor="#eaeaea" padding="125% 0 0" cursor="pointer">
                <AbsoluteBox backgroundImg="url('https://cdn.myanimelist.net/images/anime/1079/133529.jpg')" backgroundSize="cover" top="0" right="0" bottom="0" left="0" />
            </Box>
            <TextHeading as="h3" height="40px" overflow="hidden" textOverflow="ellipsis" margin="8px 0 16px">
                <Link href="/" target="_blank">
                    Title Here
                </Link>
            </TextHeading>
        </Box>
    )
};