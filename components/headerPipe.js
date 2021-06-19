import headerPipeStyles from "../styles/headerPipe.module.css"

export default function HeaderPipe({children}) {
    return (
        <div className={headerPipeStyles.container}>
            <div className={headerPipeStyles.vertBarWrapper}>
                {/*<div className={headerPipeStyles.vertBarShadow}/>*/}
                <div className={headerPipeStyles.vertBar}/>
            </div>
            <div className={headerPipeStyles.content}>{children}</div>
        </div>
    )
}