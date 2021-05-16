import React, { ReactElement, useCallback, useState } from 'react'
import { SearchOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

interface Props {
    onSearch: (text: string) => void;
}

function SearchInput({ onSearch }: Props): ReactElement {
    const [searchedText, setSearchedText] = useState('');

    const textChangedHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedText(event.target.value);
    }, [setSearchedText])

    const onSearchedClicked = useCallback(() => {
        onSearch(searchedText);
    }, [onSearch, searchedText])

    return (
        <div className="w-full mb-3 md:mb-0 md:w-6/12 xl:w-2/5 pl-4 border border-gray-300 rounded-md flex justify-between items-center">
            <input className="outline-none w-4/5" type="text" placeholder="Search product by name" onChange={textChangedHandler} value={searchedText} />
            <IconButton className="focus:outline-none" onClick={onSearchedClicked}>
                <SearchOutlined className="text-primary cursor-pointer" />
            </IconButton>
        </div>
    )
}

export default SearchInput
