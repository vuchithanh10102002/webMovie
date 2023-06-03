import React, { ChangeEvent, useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
interface Props {
    name?: string,
    type?: string,
    placeholder?: string,
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({
    name,
    type = 'text',
    placeholder,
    handleChange
}: Props) => {
    const [value, setValue] = useState<string>();
    useEffect(() => {
        setValue(value ?? "");
    }, [value]);

    const onChange = handleChange ? handleChange : (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        let value = e.target.value;

        setValue(value);
    };

    return (
        <div className='searchingBox'>
            <TextField
                sx={{
                    padding: 5,
                    backgroundColor: 'transparent',
                }}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default SearchBox