import Image from 'next/image'
import styles from '../styles/shared.module.css'
import cardStyles from '../styles/card.module.css'
import textStyles from '../styles/text.module.css'

export function CopyCard({title, content}) {
    return (
        <>
            <div className={cardStyles.containerShadowWrapper} onClick={async e => {
                await navigator.clipboard.writeText(content.replaceAll('\n',''));
                let prompt = document.getElementById('ctcPrompt');
                prompt.innerHTML = 'Copied!';
                await new Promise(r => setTimeout(r, 2000));
                prompt.innerHTML = '(Click to copy)';
            }}>
                <div className={cardStyles.containerShadow}/>
                <div className={cardStyles.container}>
                    <div className={`${textStyles.medium} ${textStyles.bold}`}>
                        {title}
                    </div>
                    <div className={`${textStyles.small} ${textStyles.faint}`} id={"ctcPrompt"}>
                        (Click to copy)
                    </div>
                    <div className={`${textStyles.mono} ${textStyles.small} ${cardStyles.centered}`} id={"copyTarget"}>
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