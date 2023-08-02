/** @jsxImportSource @emotion/react */
'use client'

import Box from '@/components/user-interfaces/Box';
import FixedBox from '@/components/user-interfaces/FixedBox';
import TextHeading from '@/components/user-interfaces/TextHeading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBookmark, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import AbsoluteBox from '@/components/user-interfaces/AbsoluteBox';
import Input from '@/components/user-interfaces/Input';

export default function Header() {
    return (
        <FixedBox width="100%" maxWidth="768px" backgroundColor="#000" top="0" zIndex={9}>
            <Box color="#fff" padding="8px 16px">
                <TextHeading display="inline-block">
                    <Link href="/">
                        Aniped
                    </Link>
                </TextHeading>
                <AbsoluteBox top="50%" right="16px" transform="translateY(-50%)">
                    <Box display="inline-block" margin="0 16px 0 0" cursor="pointer">
                        <FontAwesomeIcon icon={faBookmark} />
                    </Box>
                    <Box display="inline-block" cursor="pointer">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Box>
                </AbsoluteBox>
            </Box>
            <AbsoluteBox width="100%" backgroundColor="#000" top="53px" left="0" right="0">
                <Box padding="0 16px 8px" textAlign="right">
                    <Box display="inline-block" margin="0 16px 0 0">
                        <Input width="100%" maxWidth="150px" />
                    </Box>
                    <Box display="inline-block" cursor="pointer">
                        <FontAwesomeIcon icon={faClose} />
                    </Box>
                </Box>
            </AbsoluteBox>
        </FixedBox>
    )
};