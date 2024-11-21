import { Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

import * as SnackbarService from '../services/SnackbarService';

export function SnackbarRoot() {
    const [open, setOpen] = useState<boolean>(false);
    const [rootContent, setRootContent] = useState({ content: <></> });

    useEffect(() => {
        SnackbarService.on('openSnackbar', ({ content }) => {
            setRootContent({ content });
            setOpen(true);
        });
        SnackbarService.on('closeSnackbar', () => {
            setRootContent({ content: <></> });
            setOpen(false);
        });
    }, []);

    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setRootContent({ content: <></> });
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            {rootContent.content}
        </Snackbar>
    );
}
