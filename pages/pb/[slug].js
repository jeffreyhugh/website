import Head from "next/head"
import Meta from '../../components/meta'
import Element from "../../components/element";
import BigContainer from "../../components/bigContainer"
import Spacer from "../../components/spacer";
import HalfSpacer from "../../components/halfSpacer";
import HeaderPipe from "../../components/headerPipe";
import textStyles from "../../styles/text.module.css";
import Container from "../../components/container";
import formStyles from "../../styles/form.module.css"
import BackHome from "../../components/backHome";
import Code from "../../components/code";

export async function getServerSideProps(ctx) {
    const { slug } = ctx.query
    const res = await fetch(`https://storage.queue.bot/pb/${slug}`)
    const data = await res.text()
    return {
        props: {
            slug: slug,
            data: data
        }
    }
}

export default function Slug({ slug, data }) {
    return (
        <Meta>
            <Head>
                <title>{`QueueBot - ${slug}`}</title>
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
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>
                            Pastebin
                        </div>
                        <div className={`${textStyles.large} ${textStyles.mono}`}>
                            {slug}
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer />
                <Element>
                    <pre>
                        { data }
                    </pre>
                </Element>

                <Spacer />
                <BackHome />
            </BigContainer>
        </Meta>
    )
}