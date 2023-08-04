/** @jsxImportSource @emotion/react */
'use client'

import Box from '@/components/user-interfaces/Box';
import Header from '../Header';
import { SearchContext } from '@/context/Search';
import { useState } from 'react';

export default function Layout({
    children,
}: LayoutProps) {
    const [searchAnime, setSearchAnime] = useState("");

    return (
        <main
            css={{
                color: '#fff',
                width: '100%',
                maxWidth: '768px',
                margin: 'auto',
            }}
        >
            <SearchContext.Provider value={{searchAnime, setSearchAnime}}>
                <Header/>
                <Box height="100vh">
                    <Box padding="53px 0 16px">
                        {children}
                    </Box>
                </Box>
            </SearchContext.Provider>
        </main>
    )
};