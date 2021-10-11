export default function Code({children}) {
    return (
        <code style={{padding: "0 0.3rem"}}>
            {/* <span style={{userSelect: 'none'}}>`</span> */}
            {children}
        </code>
    )
}