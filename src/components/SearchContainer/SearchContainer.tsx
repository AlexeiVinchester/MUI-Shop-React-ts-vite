import { TextField } from "@mui/material";
import { SearchContainerProps } from "./interface/SearchContainer.interface";

const SearchContainer = ({onChange, value}: SearchContainerProps) => {
    return (
        <TextField
            label='search' 
            variant='standard'
            fullWidth
            type="search"
            onChange={onChange}
            value={value}
            sx={{mb: '1.5rem'}}
        />
    );
};

export { SearchContainer };