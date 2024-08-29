import { SearchContainerProps } from "./interface/SearchContainer.interface";

const SearchContainer = ({onChange, value}: SearchContainerProps) => {
    return (
        <input 
            type="search"
            onChange={onChange}
            value={value}
        />
    );
};

export { SearchContainer };