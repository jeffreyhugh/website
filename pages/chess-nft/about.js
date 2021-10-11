import Meta from "../../components/meta";
import Head from "next/head";
import BigContainer from "../../components/bigContainer";
import Spacer from "../../components/spacer";
import HeaderPipe from "../../components/headerPipe";
import textStyles from "../../styles/text.module.css"
import Container from "../../components/container";
import Link from "next/link";
import Element from "../../components/element";

export default function ChessNFT() {
    return (
        <Meta>
            <Head>
                <title>{"QueueBot - Chess NFT FAQ"}</title>
                <meta name="og:title" content={"Chess NFT"} />
                <meta name="og:description" content={"Mint a chessboard on the Rinkeby testnet"} />
                <meta name="og:type" content={"website"} />
                <meta name="og:url" content={"https://queue.bot"} />
                <meta name="theme-color" content={"#5ee7df"} />
            </Head>
            <BigContainer>
                <Spacer />
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>Chess NFT - FAQ</div>
                        <div className={`${textStyles.large}`}>Mint a chessboard on the Rinkeby testnet</div>
                    </Container>
                </HeaderPipe>

                <Spacer />

                <HeaderPipe id="pgn">
                    <Container>
                        <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>PGN</div>
                        <div className={`${textStyles.medium}`}>Portable Game Notation</div>
                    </Container>
                </HeaderPipe>

                <Element>
                    <span>
                        PGN is a way to represent a full chess game. 
                        On Chess.com, click the "share" button in the bottom-right corner, then choose the PGN tab and copy the text.
                    </span>
                </Element>

            </BigContainer>
        </Meta>
    )
}