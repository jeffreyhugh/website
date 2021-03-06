import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/meta'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import styles from "../styles/shared.module.css"
import textStyles from "../styles/text.module.css"
import HeaderPipe from "../components/headerPipe";
import BigContainer from "../components/bigContainer";
import Spacer from "../components/spacer";
import Container from "../components/container";
import Element from "../components/element";
import { Social, SocialWrapper } from "../components/social";
import { getSortedLinks } from "../lib/links";
import { Card, CardWrapper } from "../components/card";
import { getSortedProjects } from "../lib/projects";
import { getSortedTools } from "../lib/tools";
import { CopyCard } from "../components/copyCard";

export default function Home({ allPostsData, allLinks, allProjects, allTools }) {
    return (
        <Meta>
            <Head>
                <title>{"QueueBot"}</title>
                <meta name="og:title" content={"QueueBot"} />
                <meta name="og:description" content={"Examine the consequences"} />
                <meta name="og:type" content={"website"} />
                <meta name="og:url" content={"https://queue.bot"} />
                <meta name="theme-color" content={"#5ee7df"} />
            </Head>
            <BigContainer>
                <Spacer />
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>QueueBot
                        </div>
                        <div className={`${textStyles.large}`}>Examine the consequences</div>
                    </Container>
                </HeaderPipe>

                <Spacer />

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"about"}>
                        <i className={`fa fa-id-card ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        About
                    </div>
                </HeaderPipe>

                <Element>
                    <div className={`${styles.humanImage} ${styles.darkened}`}>
                        <Image src={"/images/me.png"} alt={'My headshot'} width={150} height={150}
                            layout={"responsive"} className={styles.rounded} quality={100} />
                    </div>
                    <Container>
                        <span>
                            Hi, my name's Jeff.
                            I'm currently pursuing a BS in CS with an AI specialization at the University of South Dakota.
                        </span>

                        <br />

                        <span>
                            I'm a fullstack engineer building all kinds of fun projects. My big projects are <a href={"#projects"}>listed below</a>.
                        </span>
                        
                        <br />
                        
                        <span>
                            I also build keyboards in my free time!
                            Since I get a lot of questions about how I use my 40% ortho as a daily driver, I <Link
                                href={"/posts/00"}><a>wrote a blog post about it</a></Link>.
                        </span>
                    </Container>
                </Element>

                <Spacer />

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"links"}>
                        <i className={`fa fa-link ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        Links
                    </div>
                </HeaderPipe>

                <SocialWrapper>
                    {allLinks ? allLinks.map(p => (
                        <Social alt={p.alt} link={p.link} icon={p.icon} order={p.order} key={p.order} />
                    )) : <></>}
                </SocialWrapper>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"projects"}>
                        <i className={`fa fa-cubes ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        Projects
                    </div>
                </HeaderPipe>

                <CardWrapper>
                    {allProjects ? allProjects.map(p => (
                        <Card link={p.link} name={p.name} description={p.description} imageURL={p.imageURL}
                            order={p.order} key={p.order} newTab={false} />
                    )) : <></>}
                </CardWrapper>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"posts"}>
                        <i className={`fa fa-pencil ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        Posts {' '}
                        <Link href={"/posts"}>
                            <a style={{ textShadow: 'none' }}>
                                <span className={`${textStyles.medium} ${textStyles.faint} ${textStyles.light}`}>
                                    (view all)
                                </span>
                            </a>
                        </Link>
                    </div>
                </HeaderPipe>

                <CardWrapper>
                    {allPostsData ? allPostsData.map((p, i) => {
                        if (i < 8) {
                            return <Card link={`/posts/${p.id}`} name={p.title}
                                description={<Date dateString={p.date} />} order={p.date} key={p.date}
                                newTab={false} />
                        } else {
                            return <></>
                        }
                    }) : <></>}
                </CardWrapper>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"tools"}>
                        <i className={`fa fa-wrench ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        Tools
                    </div>
                </HeaderPipe>

                <CardWrapper>
                    {allTools ? allTools.map(p => (
                        <Card link={p.link} name={p.name} description={p.description} imageURL={p.imageURL}
                            order={p.order} key={p.order} newTab={true} />
                    )) : <></>}
                </CardWrapper>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"wallet"}>
                        <i className={`fa fa-money ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        Wallet
                    </div>
                </HeaderPipe>

                <CardWrapper>
                    <CopyCard title={"XMR"}
                        content={"42k2t7nJ7osN2EL6fEP\nPAy3yR2s6zHSVmLE8vw\nVPz8BPGT1dtf3hk3MSz\naG7P4rvViJfSjaaSPwy\nq4r1jTmKcqkpHuargMc"}
                        key={1} />
                    <CopyCard title={"BTC"} content={"bc1q0f33nagdzd\nj7l3kdtrrv46qg\n8pn0yzgwf07pj9"} />
                    <CopyCard title={"ETH"} content={"0x210b937aE5b3\nD0b8420bEb2103\n68d8323393F082"} />
                </CardWrapper>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"gpg"}>
                        <i className={`fa fa-key-modern ${textStyles.gradient} ${styles.rightMarginIcon}`}
                            aria-hidden={true} />{' '}
                        Signing Keys
                    </div>
                </HeaderPipe>

                <CardWrapper>
                    <CopyCard title={"GPG"}
                        content={["-----BEGIN PGP PUBLIC KEY BLOCK-----",
                            "",
                            "mDMEYc5QDxYJKwYBBAHaRw8BAQdAUTIlys0iyUdiC4/bpJ6vjGJ5g7p7Wo6StrKv",
                            "uEf2oru0E0plZmZfIDxxQHF1ZXVlLmJvdD6IkAQTFggAOBYhBKyY7dM2PzzunThp",
                            "P21iqotNkASvBQJhzlAPAhsDBQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEG1i",
                            "qotNkASvvD4A/jVW5owzO/Vj5x5tsYrqJEThkd4phgexVg6zkuhGlqkmAP4vKtIn",
                            "ELsq5XsxaP53eH+JiR3bO5IBF01FBBITeX7qD7g4BGHOUA8SCisGAQQBl1UBBQEB",
                            "B0DriijKnyFFP6m9g0PsWRcQNhQhBuhgTdEx1/fGH7HrOQMBCAeIeAQYFggAIBYh",
                            "BKyY7dM2PzzunThpP21iqotNkASvBQJhzlAPAhsMAAoJEG1iqotNkASvbdMA/1C7",
                            "2i+w++Zp3+ZlgYNGam6HfpIeCsOdMtEN/gXYooaFAP9ZWz9zimskCm9wfeY13y51",
                            "rAriKsPNWiY+p9lWTvawCg==",
                            "=5/S0",
                            "-----END PGP PUBLIC KEY BLOCK-----"].join("\n")}
                        key={1} ignoreNewline />
                </CardWrapper>

            </BigContainer>
        </Meta>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    const allLinks = getSortedLinks()
    const allProjects = getSortedProjects()
    const allTools = getSortedTools()
    return {
        props: {
            allPostsData: allPostsData,
            allLinks: allLinks,
            allProjects: allProjects,
            allTools: allTools
        }
    }
}