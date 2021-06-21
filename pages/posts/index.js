import Meta from "../../components/meta";
import BigContainer from "../../components/bigContainer";
import Spacer from "../../components/spacer";
import HeaderPipe from "../../components/headerPipe";
import Container from "../../components/container";
import textStyles from "../../styles/text.module.css";
import {Card, CardWrapper} from "../../components/card";
import Date from "../../components/date";
import {getSortedPostsData} from "../../lib/posts";
import BackHome from "../../components/backHome";
import Head from "next/head";
import styles from "../../styles/shared.module.css";

export default function PostsIndex({allPostsData}) {
    return (
        <Meta>
            <Head>
                <title>{"QueueBot - Posts"}</title>
            </Head>
            <BigContainer>
                <Spacer/>
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>
                            All Posts
                        </div>
                        <div className={`${textStyles.large}`}>
                            Sorted by decreasing date
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                <CardWrapper>
                    {allPostsData ? allPostsData.map(p => (
                        <Card link={`/posts/${p.id}`} name={p.title} description={<Date dateString={p.date}/>}
                              order={p.date} key={p.date}
                              newTab={false}/>
                    )) : <></>}
                </CardWrapper>

                <BackHome/>
            </BigContainer>
        </Meta>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    console.log(allPostsData)
    return {
        props: {
            allPostsData: allPostsData
        }
    }
}