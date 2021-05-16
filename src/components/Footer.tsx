import React, { ReactElement } from 'react'
import { Instagram, Facebook, EmailOutlined, Twitter, YouTube, LinkedIn, Pinterest } from '@material-ui/icons';

interface Props {

}

function Footer({ }: Props): ReactElement {
    return (
        <footer className="w-full bg-gray-100 p-8">
            <div className="container px-4 mx-auto text-textColor flex justify-between flex-col md:flex-row">
                <div className="md:w-6/12 p-4 md:p-10">
                    <h2 className="text-2xl font-bold border-primary border-b py-2">The Company</h2>
                    <ul className="mt-4">
                        <li className="hover:text-primary cursor-pointer">About us</li>
                        <li className="hover:text-primary cursor-pointer">Blog</li>
                        <li className="hover:text-primary cursor-pointer">Careers</li>
                        <li className="hover:text-primary cursor-pointer">Privacy policy</li>
                    </ul>
                </div>
                <div className="md:w-6/12 p-4 md:p-10">
                    <h2 className="text-2xl font-bold border-primary border-b py-2">Connect with us</h2>
                    <div className="w-full flex justify-between mt-4 md:px-4">
                        <EmailOutlined className="hover:text-primary cursor-pointer" />
                        <Facebook className="hover:text-primary cursor-pointer" />
                        <Instagram className="hover:text-primary cursor-pointer" />
                        <Twitter className="hover:text-primary cursor-pointer" />
                        <YouTube className="hover:text-primary cursor-pointer" />
                        <LinkedIn className="hover:text-primary cursor-pointer" />
                        <Pinterest className="hover:text-primary cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
