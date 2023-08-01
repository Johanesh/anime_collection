/** @jsxImportSource @emotion/react */
'use client'

import Box from '@/components/user-interfaces/Box';

export default function Layout({
    children,
}: LayoutProps) {
    return (
        <div
            css={{
                backgroundColor: '#000',
                color: '#fff',
                width: '100%',
                maxWidth: '768px',
                margin: 'auto',
            }}
        >
            <Box height="100vh">
                {children}
            </Box>
        </div>
    )
};