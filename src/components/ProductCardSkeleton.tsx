import React, { ReactElement } from 'react'
import ContentLoader from 'react-content-loader'

interface Props {

}

function ProductCardSkeleton(props: Props): ReactElement {
    return (
        <ContentLoader
            className="w-full"
            viewBox="0 0 450 400"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            {...props}
        >
            <rect x="10" y="345" rx="4" ry="4" width="300" height="24" />
            <rect x="10" y="380" rx="3" ry="3" width="150" height="16" />
            <rect x="10" y="405" rx="3" ry="3" width="100" height="16" />
            <rect x="10" y="10" rx="10" ry="10" width="388" height="320" />
        </ContentLoader>
    )
}

export default ProductCardSkeleton

