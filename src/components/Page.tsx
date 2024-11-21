import { Box } from '@mui/material';
import React, { ReactElement } from 'react';

import { ModalRoot } from '../components/ModalRoot';
import { SnackbarRoot } from '../components/SnackbarRoot';

export interface PageProps {
    children?: ReactElement;
}

export function Page({ children }: PageProps) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {children}
            <SnackbarRoot />
            <ModalRoot />
        </Box>
    );
}
