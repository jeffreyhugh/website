import Link from 'next/link'
import socialStyles from '../styles/social.module.css'

export function SocialWrapper({children}) {
    return (
        <div className={socialStyles.wrapper}>
            {children}
        </div>
    )
}

export function Social({order, icon, link, alt}) {
    return (
        <>
            <Link href={link} id={order}>
                <a className={socialStyles.a} target={"_blank"}>
                    <div className={socialStyles.containerShadowWrapper}>
                        <div className={socialStyles.containerShadow}/>
                        <div className={socialStyles.container}>
                            <i className={`fa fa-inverse ${icon} ${socialStyles.icon}`} aria-hidden={true}/>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}
