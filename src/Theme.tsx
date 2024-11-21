import { createTheme } from '@mui/material';

const primaryMain = '#262730';

const secondaryMain = '#77BA99';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryMain,
        },
        secondary: {
            main: secondaryMain,
        },
    },
    typography: {
        allVariants: {
            color: primaryMain,
        },
    },
});

export default theme;
