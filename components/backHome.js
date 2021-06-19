import Link from 'next/link'
import textStyles from "../styles/text.module.css"

export default function BackHome() {
    return (
        <>
            <Link href={'/'}>
                <a style={{textShadow: 'none'}}>
                    <div className={`${textStyles.regular} ${textStyles.faint}`} style={{margin: '0.85rem'}}>
                        <i className={"fa fa-fw fa-home "} aria-hidden={true} style={{marginRight: '0.5rem'}}/>
                        Back to Home
                    </div>
                </a>
            </Link>
        </>
    )
}