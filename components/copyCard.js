import Image from 'next/image'
import styles from '../styles/shared.module.css'
import cardStyles from '../styles/card.module.css'
import textStyles from '../styles/text.module.css'

export function CopyCard({title, content}) {
    return (
        <>
            <div className={cardStyles.containerShadowWrapper} onClick={e => {
                let range = document.createRange();
                range.selectNode(document.getElementById("copyTarget"));
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand("copy");
                window.getSelection().removeAllRanges();
            }}>
                <div className={cardStyles.containerShadow}/>
                <div className={cardStyles.container}>
                    <div className={`${textStyles.medium} ${textStyles.bold}`}>
                        {title}
                    </div>
                    <div className={`${textStyles.small} ${textStyles.faint}`}>
                        (Click to copy)
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