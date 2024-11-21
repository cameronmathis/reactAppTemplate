import { Box, Typography } from '@mui/material';
import React from 'react';

import { Page } from './Page';

export function InfoPage({ title, text }) {
    return (
        <Page>
            <Box
                sx={{
                    width: 'min-content',
                    height: 'min-content',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50px',
                    border: '5px solid',
                    borderColor: 'primary.main',
                    padding: '25px',
                }}>
                <Typography noWrap variant='h2'>
                    {title}
                </Typography>
                <Typography noWrap variant='h6'>
                    {text}
                </Typography>
            </Box>
        </Page>
    );
}
