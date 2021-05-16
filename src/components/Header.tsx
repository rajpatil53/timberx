import React, { ReactElement } from 'react';
import { ShoppingCartOutlined, FavoriteBorderRounded, PersonOutlineRounded } from '@material-ui/icons';

interface Props {

}

function Header({ }: Props): ReactElement {
    return (
        <header className="w-screen border-b-2 h-20">
            <div className="container px-4 mx-auto flex justify-between items-center h-full">
                <h1 className="text-textColor text-4xl font-black">Timber<span className="text-primary">X</span></h1>
                <div>
                    <FavoriteBorderRounded fontSize="large" className="pr-2 cursor-pointer text-textColor" />
                    <ShoppingCartOutlined fontSize="large" className="pr-2 cursor-pointer text-textColor" />
                    <PersonOutlineRounded fontSize="large" className="pr-2 cursor-pointer text-primary" />
                </div>
            </div>
        </header>
    )
}

export default Header
