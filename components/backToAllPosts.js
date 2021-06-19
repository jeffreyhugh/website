import Link from "next/link";
import textStyles from "../styles/text.module.css";

export default function BackToAllPosts() {
    return (
        <>
            <Link href={'/posts'}>
                <a style={{textShadow: 'none'}}>
                    <div className={`${textStyles.regular} ${textStyles.faint}`} style={{margin: '0.4rem 0.85rem'}}>
                        <i className={"fa fa-fw fa-folder-open "} aria-hidden={true} style={{marginRight: '0.5rem'}}/>
                        Back to All Posts
                    </div>
                </a>
            </Link>
        </>
    )
}