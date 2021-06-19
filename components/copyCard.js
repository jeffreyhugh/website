import Image from 'next/image'
import styles from '../styles/shared.module.css'
import cardStyles from '../styles/card.module.css'
import textStyles from '../styles/text.module.css'

export function CopyCard({title, content}) {
    return (
        <>
            <div className={cardStyles.containerShadowWrapper}>
                <div className={cardStyles.containerShadow}/>
                <div className={cardStyles.container}>
                    <div className={`${textStyles.medium}`}>
                        {title}
                    </div>
                    <div className={`${textStyles.mono} ${textStyles.small}`} id={"copyTarget"} style={{overflowWrap: 'anywhere', width: '90%'}}>
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

export function CardWrapper({children}) {
    return (
        <div className={cardStyles.wrapper}>
            {children}
        </div>
    )
}