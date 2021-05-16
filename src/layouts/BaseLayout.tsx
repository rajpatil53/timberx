import React, { ReactElement } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
    children: JSX.Element;
}

function BaseLayout({ children }: Props): ReactElement {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default BaseLayout
