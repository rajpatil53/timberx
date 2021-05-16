import { MenuItem, Select } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { SORT_TYPES } from '../constants'
import SearchInput from './SearchInput'

interface Props {
    selectedSorting: string;
    onSortSelected: (event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => void;
    onProductSearched: (text: string) => void;
}

function SortFilter({ selectedSorting, onSortSelected, onProductSearched }: Props): ReactElement {
    return (
        <div className="flex justify-between items-center flex-col md:flex-row border-b pb-4">
            <SearchInput onSearch={onProductSearched} />

            <div className="w-full mb-3 md:mb-0 md:w-6/12 md:text-right flex items-center md:justify-end">
                <p className="whitespace-nowrap">SORT BY</p>
                <Select
                    className="ml-4 outline-none text-left w-full md:w-56"
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    name="sorting"
                    variant="outlined"
                    autoWidth={true}
                    defaultValue={SORT_TYPES.DEFAULT.value}
                    value={selectedSorting}
                    onChange={onSortSelected}
                >
                    {
                        Object.keys(SORT_TYPES).map((type) => (
                            <MenuItem key={SORT_TYPES[type].value} value={SORT_TYPES[type].value}>{SORT_TYPES[type].label}</MenuItem>
                        ))
                    }
                </Select>
            </div>
        </div>
    )
}

export default SortFilter
