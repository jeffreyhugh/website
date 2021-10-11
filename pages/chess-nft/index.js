import Meta from "../../components/meta";
import Head from "next/head";
import BigContainer from "../../components/bigContainer";
import Spacer from "../../components/spacer";
import HeaderPipe from "../../components/headerPipe";
import textStyles from "../../styles/text.module.css"
import Container from "../../components/container";
import formStyles from "../../styles/form.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import HalfSpacer from "../../components/halfSpacer";
import Element from "../../components/element";
import SmallElement from "../../components/smallElement"
import { useRouter } from "next/router"
import Code from "../../components/code"
import { ethers } from "ethers"
import newChessNFT from "../../utils/NewChessNFT.json"

const CONTRACT_ADDESS = '0x2e7e287b07e923D2591715e772015ab69295E1f0'

export default function ChessNFT() {

    const [currentAccount, setCurrentAccount] = useState("")
    const [hasMetaMask, setHasMetaMask] = useState(false)
    const [previewHidden, setPreviewHidden] = useState(true)
    const [newestTokenID, setNewestTokenID] = useState("")

    useEffect(() => {
        const { ethereum } = window;

        if (ethereum) {
            setHasMetaMask(true)
        }
    }, [])

    const installMetaMask = async (window) => {
        window.open("https://metamask.io", "_blank")
    }

    const connectAccounts = async (window) => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("could not find wallet")
        } else {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

            setCurrentAccount(accounts[0])

            console.log(`connected to ${accounts[0]}`)

            setupEventListener(window)
            console.log("set up event listener!")
        }
    }

    const setupEventListener = async (window) => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                return
            }

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDESS, newChessNFT.abi, signer)

            connectedContract.on("NewChessNFTMinted", (from, tokenID) => {
                setNewestTokenID(tokenID)
                console.log(from, tokenID.toNumber())
            })
        } catch (error) {
            console.log(error)
        }
    }

    const generatePreview = async () => {
        console.log("generating preview")

        const pgnTextArea = document.getElementById("pgn")
        if (pgnTextArea.value === "") {
            return
        }
        pgnTextArea.disabled = true
        const previewButton = document.getElementById("previewButton")
        previewButton.disabled = true
        const previewButtonInnerHTML = previewButton.innerHTML
        previewButton.innerHTML = '<i class="fa fa-spin fa-circle-o-notch" aria-hidden />'
        const mintButton = document.getElementById("mintButton")
        mintButton.disabled = true
        const mintButtonInnerHTML = mintButton.innerHTML
        mintButton.innerHTML = '<i class="fa fa-spin fa-circle-o-notch" aria-hidden />'

        const pgnData = pgnTextArea.value

        let res
        try {
            res = await fetch("https://api.queue.bot/nft/v1/chess/boardStateFromPGN", {
                method: 'POST',
                body: pgnData,
            })
        } catch (error) {
            previewButton.innerHTML = previewButtonInnerHTML;
            mintButton.innerHTML = mintButtonInnerHTML;
            previewButton.disabled = false
            mintButton.disabled = false
            pgnTextArea.disabled = false
            return
        }

        console.log("received status", res.status)

        if (res.status !== 200) {
            previewButton.innerHTML = previewButtonInnerHTML;
            mintButton.innerHTML = mintButtonInnerHTML;
            previewButton.disabled = false
            mintButton.disabled = false
            pgnTextArea.disabled = false
            return
        }

        const boardState = await res.text()
        console.log("board state", boardState)

        document.getElementById("previewSVG").innerHTML = `<svg height="500" width="500" style="background-color:white"><image height=500 width=500 xlink:href="https://api.queue.bot/nft/v1/chess/svgFromBoardState?boardState=${boardState}"/></svg>`
        previewButton.innerHTML = previewButtonInnerHTML;
        mintButton.innerHTML = mintButtonInnerHTML;
        previewButton.disabled = false
        mintButton.disabled = false
        pgnTextArea.disabled = false
        console.log("set preview")
        setPreviewHidden(false)
    }

    const askContractToMintNFT = async (window) => {
        console.log("minting token")
        const { ethereum } = window;

        if (!ethereum) {
            return
        }

        const pgnTextArea = document.getElementById("pgn")
        if (pgnTextArea.value === "") {
            return
        }
        pgnTextArea.disabled = true
        const previewButton = document.getElementById("previewButton")
        previewButton.disabled = true
        const previewButtonInnerHTML = previewButton.innerHTML
        previewButton.innerHTML = '<i class="fa fa-spin fa-circle-o-notch" aria-hidden />'
        const mintButton = document.getElementById("mintButton")
        mintButton.disabled = true
        const mintButtonInnerHTML = mintButton.innerHTML
        mintButton.innerHTML = '<i class="fa fa-spin fa-circle-o-notch" aria-hidden />'

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDESS, newChessNFT.abi, signer)

        console.log("requesting board state")
        const pgnData = pgnTextArea.value

        let res
        try {
            res = await fetch("https://api.queue.bot/nft/v1/chess/boardStateFromPGN", {
                method: 'POST',
                body: pgnData,
            })
        } catch (error) {
            previewButton.innerHTML = previewButtonInnerHTML;
            mintButton.innerHTML = mintButtonInnerHTML;
            previewButton.disabled = false
            mintButton.disabled = false
            pgnTextArea.disabled = false
            return
        }
        console.log("received status", res.status)

        if (res.status !== 200) {
            previewButton.innerHTML = previewButtonInnerHTML;
            mintButton.innerHTML = mintButtonInnerHTML;
            previewButton.disabled = false
            mintButton.disabled = false
            pgnTextArea.disabled = false
            return
        }

        const boardState = await res.text()
        console.log("board state", boardState)

        console.log("popping wallet to pay gas")
        try {
            let nftTxn = await connectedContract.makeNewChessNFT(boardState)
        } catch (error) {
            previewButton.innerHTML = previewButtonInnerHTML;
            mintButton.innerHTML = mintButtonInnerHTML;
            previewButton.disabled = false
            mintButton.disabled = false
            pgnTextArea.disabled = false
            console.log(error)
            return
        }

        console.log("mining...please wait")
        await nftTxn.wait()
        console.log(nftTxn)
        console.log(`mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
        previewButton.innerHTML = previewButtonInnerHTML;
        mintButton.innerHTML = mintButtonInnerHTML;
        previewButton.disabled = false
        mintButton.disabled = false
        pgnTextArea.disabled = false
    }

    return (
        <Meta>
            <Head>
                <title>{"QueueBot - Chess NFT"}</title>
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
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>Chess NFT</div>
                        <div className={`${textStyles.large}`}>Mint a chessboard on the Rinkeby testnet</div>
                    </Container>
                </HeaderPipe>

                <Spacer />

                <div hidden={hasMetaMask}>
                    <Element>
                        <span id="getMetaMaskPrompt">
                            It looks like you don't have MetaMask installed
                            <br />
                            <br />
                            MetaMask is a free browser extension that allows this application to interact with the blockchain on your behalf
                            <br />
                            <br />
                            <a href="https://metamask.io" target="_blank" rel="noreferrer" >Click here to install MetaMask</a>
                        </span>
                    </Element>
                </div>

                <div hidden={!(hasMetaMask && currentAccount === "")}>
                    <Element>
                        <span>
                            Last setup step! MetaMask is installed, but you need to connect a wallet before you can use this application
                        </span>
                    </Element>

                    <HalfSpacer />

                    <Element>
                        <div className={`${formStyles.smallButtonWrapper}`}>
                            <button type="button" className={`${formStyles.smallButton}`} onClick={() => connectAccounts(window)}>
                                <span className={`${textStyles.bold}`}>Connect to MetaMask</span>
                            </button>
                        </div>
                    </Element>
                </div>

                <div hidden={!hasMetaMask || currentAccount === ""}>
                    <Element>
                        <span>
                            Connected to <Code>{currentAccount}</Code>
                        </span>
                    </Element>
                    <HalfSpacer />

                    <form onSubmit={async e => e.preventDefault()} className={formStyles.hugeParent} id={"_form"}>
                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor={"pgn"}>PGN
                            <span className={`${textStyles.medium} ${textStyles.regular}`} style={{ paddingLeft: "0.5rem" }}>
                                <Link href="/chess-nft/about#pgn">
                                    <a target={"_blank"} rel={"noreferrer"}>
                                        (what's this?)
                                    </a>
                                </Link>
                            </span>
                            <div className={`${formStyles.textBoxShadowWrapper}`}>
                                <div className={`${formStyles.textBoxShadow}`} />
                                <textarea className={`${formStyles.textBox} ${textStyles.mono} ${formStyles.textArea}`} id="pgn" rows={7} placeholder={"[White \"Alex Klein\"]\n[Black \"Sam Garre\"]\n\n1. e4 c7 2. ..."} required />
                            </div>
                        </label>

                        <SmallElement>
                            <div className={`${formStyles.buttonWrapper}`}>
                                <button type="button" id="previewButton" className={`${formStyles.button}`} onClick={() => generatePreview()}>
                                    <span className={`${textStyles.bold}`}>
                                        <i className={`fa fa-eye`} aria-hidden />&nbsp;
                                        Preview
                                    </span>
                                </button>
                            </div>
                            <div className={`${formStyles.buttonWrapper}`}>
                                <button type="button" id="mintButton" className={`${formStyles.button}`} onClick={() => askContractToMintNFT(window)}>
                                    <span className={`${textStyles.bold}`}>
                                        <i className={`fa fa-magic`} aria-hidden />&nbsp;
                                        Mint NFT
                                    </span>
                                </button>
                            </div>
                        </SmallElement>

                        <SmallElement>
                            <div className={`${formStyles.buttonWrapper}`} >
                                <button type="button" id="openseaButton" className={`${formStyles.button}`} onClick={() => window.open(`https://testnets.opensea.io/collection/chessnft-v3`)}>
                                    <span className={`${textStyles.bold}`}>
                                        <i className={`fa fa-cubes`} />&nbsp;
                                        View the full collection on OpenSea&nbsp;&nbsp;
                                        <i className={`fa fa-external-link`} aria-hidden />
                                    </span>
                                </button>
                            </div>
                        </SmallElement>

                        <SmallElement>
                            <div className={`${formStyles.buttonWrapper}`} style={{ display: newestTokenID === "" ? 'none' : '' }}>
                                <button type="button" id="openseaButton" className={`${formStyles.button}`} onClick={() => window.open(`https://testnets.opensea.io/assets/${CONTRACT_ADDESS}/${newestTokenID}`)}>
                                    <span className={`${textStyles.bold}`}>
                                        <i className={`fa fa-cube`} />&nbsp;
                                        View NFT on OpenSea&nbsp;&nbsp;
                                        <i className={`fa fa-external-link`} />
                                    </span>
                                </button>
                            </div>
                        </SmallElement>

                    </form>

                </div>

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div hidden={previewHidden} className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>Preview</div>
                    </Container>
                </HeaderPipe>

                <Element>
                    <div style={{ flexGrow: 1 }} id="previewSVG" hidden={previewHidden}>

                    </div>
                </Element>
            </BigContainer>
        </Meta>
    )
}