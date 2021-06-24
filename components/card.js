import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/shared.module.css'
import cardStyles from '../styles/card.module.css'
import textStyles from '../styles/text.module.css'

export function Card({imageURL, name, description, link, newTab}) {
    if (link) {
        return (
            <>
                <Link href={link} id={name}>
                    <a className={cardStyles.a} target={newTab ? "_blank" : ""}>
                        <div className={cardStyles.containerShadowWrapper}>
                            <div className={cardStyles.containerShadow}/>
                            <div className={cardStyles.container}>
                                {imageURL ? <Image src={imageURL} alt={name} height={75} width={75}
                                                   className={styles.rounded}/> : <></>}
                                <div
                                    className={`${textStyles.large} ${textStyles.bold} ${cardStyles.padded} ${cardStyles.centered}`}>
                                    {name}
                                </div>
                                <div className={textStyles.small}>
                                    {description}
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </>
        )
    } else {
        return (
            <>
                <div className={cardStyles.containerShadowWrapper}>
                    <div className={cardStyles.containerShadow}/>
                    <div className={cardStyles.container}>
                        {imageURL ? <Image src={imageURL} alt={name} height={75} width={75}
                                           className={styles.rounded}/> : <></>}
                        <div className={`${textStyles.large} ${textStyles.bold} ${cardStyles.padded}`}>
                            {name}
                        </div>
                        <div className={textStyles.small}>
                            {description}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export function CardWrapper({children}) {
    return (
        <div className={cardStyles.wrapper}>
            {children}
        </div>
    )
}