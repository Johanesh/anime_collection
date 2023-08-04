/** @jsxImportSource @emotion/react */
'use client'

import Box from '@/components/user-interfaces/Box';
import FixedBox from '@/components/user-interfaces/FixedBox';
import TextHeading from '@/components/user-interfaces/TextHeading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faClose, faEraser } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import AbsoluteBox from '@/components/user-interfaces/AbsoluteBox';
import Input from '@/components/user-interfaces/Input';
import { useContext, useState } from 'react';
import { SearchContext } from '@/context/Search';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter()
    const {setSearchAnime} = useContext(SearchContext);
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [search, setSearch] = useState("");

    const clickSearchIcon = () => {
        setIsShowSearch((prev) => !prev);
        setSearch("");
    };

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    const handleKeyUp = (keyCode: number) => {
        if (keyCode === 13) {
            setSearchAnime(search);
            setIsShowSearch(false);
            router.push("/");
        }
    };

    const handleClear = () => {
        setSearch("");
        setSearchAnime("");
        setIsShowSearch(false);
        router.push("/");
    }

    return (
        <FixedBox width="100%" maxWidth="768px" top="0" zIndex={9}>
            <Box color="#fff" padding="8px 16px" backgroundColor="#000" zIndex={2}>
                <TextHeading display="inline-block">
                    <Link href="/">
                        Aniped
                    </Link>
                </TextHeading>
                <AbsoluteBox top="50%" right="16px" transform="translateY(-50%)">
                    <Box display="inline-block" textAlign="center" width="20px" margin="0 16px 0 0" cursor="pointer">
                        <FontAwesomeIcon icon={faHeart} />
                    </Box>
                    <Box display="inline-block" textAlign="center" width="20px" cursor="pointer" onClick={clickSearchIcon}>
                        {
                            !isShowSearch ? (
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            ) : (
                                <FontAwesomeIcon icon={faClose} />
                            )
                        }
                    </Box>
                </AbsoluteBox>
            </Box>
            <AbsoluteBox width="100%" backgroundColor="#000" top={isShowSearch ? "53px" : "0"} left="0" right="0" transition="all 0.3s ease" zIndex={1}>
                <Box padding="0 16px 8px" textAlign="right">
                    <Box display="inline-block" padding="4px" border="1px solid #fff">
                        <Box display="inline-block" margin="0 16px 0 0">
                            <Input width="100%" maxWidth="300px" value={search} placeholder="Search..." onChange={handleSearch} onKeyUp={handleKeyUp} />
                        </Box>
                        <Box display="inline-block" textAlign="center" width="20px" cursor="pointer" onClick={handleClear}>
                            <FontAwesomeIcon title="Clear Search" icon={faEraser} />
                        </Box>
                    </Box>
                </Box>
            </AbsoluteBox>
        </FixedBox>
    )
};

export default Header; 