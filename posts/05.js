import Image from 'next/image';
import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import styles from "../styles/shared.module.css";
import textStyles from "../styles/text.module.css";
import Code from "../components/code"

export default function content() {
    return (
        <>
            <Element>
                <span>
                    Not too long ago, I was at an unnamed fast-food restaurant when I noticed they had a piece of paper sitting out.
                    As with most companies around this time, they were looking for prospective employees.
                    Here's a picture.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/05-00-mcd-hiring.png"} width={656} height={596} 
                        alt={"Unnamed Restaurant Hiring Sheet"} className={styles.darkened}/>

            </Element>

            <Element>
                <span>
                    To a restaurant, it's appealing to leave the form out because it's super easy for customers to apply (without the need to go to the website).
                    Unfortunately, that list now exists for anyone to access.
                </span>
            </Element>

            <Element>
                <span>
                    On the surface, it may not seem like a big deal.
                    However, these individuals are now expecting an email from "McDonald's" about hiring, a process that usually requires a home address, SSN, and other PII. 
                </span>
            </Element>

            <Element>
                <span>
                    On a completely unrelated note, at the time of writing, <Code>mcdonalds-jobs.com</Code> is available.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/05-01-domain.png"} width={1057} height={143}
                        alt={"mcdonalds-jobs.com Availability"} className={styles.darkened}/>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    Leaving PII laying around is an unusually common issue.
                    For example, certain GrubHub tickets have 
                </span>
            </Element>
        </>
    )
}