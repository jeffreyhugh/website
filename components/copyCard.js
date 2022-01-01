import cardStyles from '../styles/card.module.css'
import textStyles from '../styles/text.module.css'

export function CopyCard({title, content, ignoreNewline}) {
    return (
        <>
            <div className={cardStyles.containerShadowWrapper} onClick={async e => {
                await navigator.clipboard.writeText(ignoreNewline ? content : content.replaceAll('\n', ''));
                let prompt = document.getElementById('ctcPrompt' + title);
                prompt.innerHTML = 'Copied!';
                await new Promise(r => setTimeout(r, 2000));
                prompt.innerHTML = '(Click to copy)';
            }}>
                <div className={cardStyles.containerShadow}/>
                <div className={cardStyles.container}>
                    <div className={`${textStyles.medium} ${textStyles.bold}`}>
                        {title}
                    </div>
                    <div className={`${textStyles.small} ${textStyles.faint}`} id={"ctcPrompt" + title}>
                        (Click to copy)
                    </div>
                    <pre className={`${textStyles.mono} ${textStyles.small} ${cardStyles.centered} ${cardStyles.mono} ${cardStyles.left}`} id={"copyTarget"}>
                        {content}
                    </pre>
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