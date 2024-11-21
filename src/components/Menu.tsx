import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MENU_ITEMS, MenuItem } from '../constants/MenuItems';

export function Menu() {
    const [activeMenuItem, setActiveMenuItem] = useState<string>('/home');
    const navigate = useNavigate();

    const handleClick = (item: MenuItem) => {
        if (activeMenuItem !== item.path) {
            navigate(item.path);
            setActiveMenuItem(item.path);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {MENU_ITEMS?.map((item, i) => {
                return (
                    <MenuButton
                        key={i}
                        isActive={activeMenuItem === item.path}
                        item={item}
                        handleClick={handleClick}
                    />
                );
            })}
        </Box>
    );
}

const MenuButtonBoxStyle = {
    margin: '0 10px',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    '&:hover': {
        borderBottom: '1px solid',
    },
};

const MenuButtonTypographyStyle = {
    padding: '0 5px',
};

interface MenuButtonProps {
    isActive: boolean;
    item: MenuItem;
    handleClick: (item: MenuItem) => void;
}

function MenuButton({ isActive, item, handleClick }: MenuButtonProps) {
    return (
        <Box>
            {isActive ? (
                <Box
                    sx={{
                        ...MenuButtonBoxStyle,
                        '&:hover': {
                            borderColor: 'primary.light',
                        },
                    }}
                    onClick={() => handleClick(item)}>
                    <Typography
                        sx={MenuButtonTypographyStyle}
                        color='primary.light'
                        noWrap
                        variant='h5'>
                        {item.text}
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{
                        ...MenuButtonBoxStyle,
                        '&:hover': {
                            borderColor: 'primary.main',
                        },
                    }}
                    onClick={() => handleClick(item)}>
                    <Typography
                        sx={MenuButtonTypographyStyle}
                        color='primary'
                        noWrap
                        variant='h5'>
                        {item.text}
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
