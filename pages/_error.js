import BigContainer from "../components/bigContainer";
import Head from "next/head";
import Meta from "../components/meta";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import textStyles from "../styles/text.module.css";
import BackHome from "../components/backHome";
import Container from "../components/container";

export default function Error({ statusCode }) {
    return (
        <Meta>
            <Head>
                <title>{`QueueBot - Error ${statusCode}`}</title>
            </Head>
            <BigContainer>
                <Spacer/>
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>
                            Error {statusCode}
                        </div>
                        <div className={`${textStyles.large}`}>
                            Sorry about that
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                <BackHome/>
            </BigContainer>
        </Meta>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}