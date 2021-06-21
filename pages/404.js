import Meta from "../components/meta";
import Head from "next/head";
import BigContainer from "../components/bigContainer";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import textStyles from "../styles/text.module.css";
import BackHome from "../components/backHome";

export default function Error() {
    return (
        <Meta>
            <Head>
                <title>{`QueueBot - 404`}</title>
            </Head>
            <BigContainer>
                <Spacer/>
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>
                            Error 404
                        </div>
                        <div className={`${textStyles.large}`}>
                            We couldn't find the requested resource. Sorry about that.
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                <BackHome/>
            </BigContainer>
        </Meta>
    )
}