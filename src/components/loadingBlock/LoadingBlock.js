import ContentLoader from "react-content-loader"

function  LoadingBlock() {
    return (
        <ContentLoader
        className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="313" y="223" rx="3" ry="3" width="178" height="6" />
            <circle cx="140" cy="140" r="140" />
            <rect x="0" y="303" rx="3" ry="0" width="278" height="101" />
        </ContentLoader>
    )

}

export default LoadingBlock