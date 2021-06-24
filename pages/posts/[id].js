import Meta from '../../components/meta'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import textStyles from '../../styles/text.module.css'
import BigContainer from "../../components/bigContainer";
import Spacer from "../../components/spacer";
import HeaderPipe from "../../components/headerPipe";
import Container from "../../components/container";
import BackHome from "../../components/backHome";
import BackToAllPosts from "../../components/backToAllPosts";

export default function Post({postData}) {
    const postBody = require(`../../posts/${postData.id}.js`)

    return (
        <Meta>
            <Head>
                <title>{`QueueBot - ${postData.title}`}</title>
                <meta property={"og:title"} content={postData.title}/>
                <meta property={"og:type"} content={"website"}/>
                <meta property={"og:url"} content={`https://queue.bot/posts/${postData.id}`}/>
                <meta property={"og:description"} content={"QueueBot - Posts"}/>
                <meta name={"theme-color"} content={"#5ee7df"}/>
            </Head>
            <BigContainer>
                <Spacer/>
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.xxxxlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                            {postData.title}
                        </div>
                        <div className={`${textStyles.large}`}>
                            by Jeff on <Date dateString={postData.date}/>
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                {postBody.default()}

                <Spacer/>

                <BackToAllPosts/>
                <BackHome/>
            </BigContainer>
        </Meta>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}