/** @jsxImportSource @emotion/react */
'use client'

import Box from '@/components/user-interfaces/Box';
import Header from '../Header';

export default function Layout({
    children,
}: LayoutProps) {
    return (
        <main
            css={{
                color: '#fff',
                width: '100%',
                maxWidth: '768px',
                margin: 'auto',
            }}
        >
            <Header/>
            <Box height="100vh">
                <Box padding="60px 0 16px">
                    {children}
                </Box>
            </Box>
        </main>
    )
};