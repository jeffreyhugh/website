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

export default function PostsIndex({allPostsData}) {
    return (
        <Meta>
            <title>{"QueueBot - Posts"}</title>
            <BigContainer>
                <Spacer/>
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>QueueBot
                        </div>
                        <div className={`${textStyles.large}`}>Examine the consequences</div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>Posts</div>
                </HeaderPipe>

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