import Meta from "../components/meta"
import Head from "next/head";
import BigContainer from "../components/bigContainer";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import textStyles from "../styles/text.module.css";
import Element from "../components/element";
import formStyles from "../styles/form.module.css";
import BackToHome from "../components/backHome";
import { useState } from "react";

const PPP = () => {
    const [players, setPlayers] = useState([]);
    const [updates, setUpdates] = useState(0);

    const handleSubmit = event => {
        event.preventDefault()
        const playerName = event.target.player.value
        if (playerName === "") {
            return
        }
        const lives = event.target.lives.value
        setPlayers(p => ([...p, {
            name: playerName,
            lives: parseInt(lives),
        }]))
        event.target.player.value = ""
    }

    const addLife = playerName => {
        let playerState = players
        for (let i = 0; i < playerState.length; i++) {
            if (playerState[i].name === playerName) {
                playerState[i].lives += 1;
                break;
            }
        }

        setPlayers(p => playerState);
        setUpdates(u => u + 1);
    }

    const removeLife = playerName => {
        let playerState = players
        for (let i = 0; i < playerState.length; i++) {
            if (playerState[i].name === playerName) {
                playerState[i].lives -= 1;
                break;
            }
        }

        setPlayers(p => playerState);
        setUpdates(u => u + 1);
    }

    const eliminate = playerName => {
        let playerState = players
        for (let i = 0; i < playerState.length; i++) {
            if (playerState[i].name === playerName) {
                playerState[i].lives = 0;
                break;
            }
        }

        setPlayers(p => playerState);
        setUpdates(u => u + 1);
    }

    const removePlayer = playerName => {
        if (!confirm(`Are you sure you want to remove ${playerName}?`)) { return }

        let playerState = players
        let targetIndex = -1
        for (let i = 0; i < playerState.length; i++) {
            if (playerState[i].name === playerName) {
                targetIndex = i;
                break;
            }
        }

        if (targetIndex === -1) { return }

        playerState.splice(targetIndex, 1)

        setPlayers(p => playerState);
        setUpdates(u => u + 1);
    }

    const shufflePlayers = () => {
        let playerState = players

        for (let i = 0; i < playerState.length; i++) {
            let j = Math.floor(Math.random() * i);

            [playerState[i], playerState[j]] = [playerState[j], playerState[i]];
        }

        setPlayers(p => playerState);
        setUpdates(u => u + 1);
    }

    const resetAll = () => {
        let playerState = players

        playerState.forEach(p => p.lives = 3);

        setPlayers(p => playerState);
        setUpdates(u => u + 1);
    }

    return (
        <Meta>
            <Head>
                <title>{"QueueBot - PPP"}</title>
                <meta name="og:title" content={"QueueBot - PPP"} />
                <meta name="og:description" content={"Polish ping pong scoreboard"} />
                <meta name="og:type" content={"website"} />
                <meta name="og:url" content={"https://queue.bot"} />
                <meta name="theme-color" content={"#5ee7df"} />
            </Head>
            <BigContainer>
                <Spacer />
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>
                            Polish Ping Pong
                        </div>
                        <div className={`${textStyles.large}`}>
                            Scoreboard
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer />

                <Element>
                    <form onSubmit={handleSubmit} className={formStyles.bigParent}>
                        <div className={formStyles.horizontal}>
                            <div style={{ flexGrow: 1 }}>
                                <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="player">
                                    <span className={`${formStyles.textBoxLabelText}`}>Player</span>
                                    <div className={`${formStyles.textBoxShadowWrapper}`}>
                                        <div className={`${formStyles.textBoxShadow}`} />
                                        <input className={`${formStyles.textBox}`} id="player" type="text" placeholder="ex. Jeff" />
                                    </div>
                                </label>
                            </div>

                            <div>
                                <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="lives">
                                    <span className={`${formStyles.textBoxLabelText}`}>Lives</span>
                                    <div className={`${formStyles.textBoxShadowWrapper}`}>
                                        <div className={`${formStyles.textBoxShadow}`} />
                                        <input className={`${formStyles.textBox}`} id="lives" type="number" defaultValue="3" />
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div style={{ flexGrow: 1, display: 'flex' }}>
                            <button type="submit" id="submit" className={`${formStyles.button}`}>
                                <span className={`${textStyles.bold}`}>Add Player</span>
                            </button>
                        </div>
                    </form>
                </Element>



                {updates >= 0 ?
                    <>
                        {players.length > 0 ? <Spacer /> : <></>}
                        {players.map(p => (
                            <HeaderPipe>
                                <Container>
                                    <div className={`${textStyles.xxxxlarge} ${textStyles.bold} ${p.lives > 0 ? textStyles.gradient : textStyles.gray}`}>
                                        {p.name} - {p.lives}
                                    </div>
                                    <div className={`${textStyles.small} ${textStyles.noselect} ${textStyles.gray}`}>
                                        <span onClick={() => addLife(p.name)} className={`${p.lives > 0 ? textStyles.faint : textStyles.gray}`} style={{ cursor: "pointer" }}>
                                            Add
                                        </span>
                                        {' | '}
                                        <span onClick={() => removeLife(p.name)} className={`${p.lives > 0 ? textStyles.faint : textStyles.gray}`} style={{ cursor: "pointer" }}>
                                            Subtract
                                        </span>
                                        {' | '}
                                        <span onClick={() => eliminate(p.name)} className={`${p.lives > 0 ? textStyles.faint : textStyles.gray}`} style={{ cursor: "pointer" }}>
                                            Set to 0
                                        </span>
                                        {' | '}
                                        <span onClick={() => removePlayer(p.name)} className={`${p.lives > 0 ? textStyles.faint : textStyles.gray}`} style={{ cursor: "pointer" }}>
                                            Remove
                                        </span>
                                    </div>
                                </Container>
                            </HeaderPipe>
                        ))} </> : <></>}

                {players.length > 0 ?
                    <>
                        <Spacer />
                        <Element>
                            <form onSubmit={e => e.preventDefault()} className={formStyles.bigParent}>
                                <div className={formStyles.horizontal} style={{ display: "flex" }}>
                                    <button type="button" onClick={() => shufflePlayers()} className={`${formStyles.button}`} style={{ flexGrow: 1, flexBasis: 1 }}>
                                        <span className={`${textStyles.bold}`}>Shuffle Players</span>
                                    </button>
                                    <button type="button" onClick={() => resetAll()} className={`${formStyles.button}`} style={{ flexGrow: 1, flexBasis: 1 }}>
                                        <span className={`${textStyles.bold}`}>Reset All</span>
                                    </button>
                                </div>
                            </form>
                        </Element>
                    </> : <></>}

                <Spacer />
                <Spacer />

                <BackToHome />
            </BigContainer>
        </Meta>
    )
}

export default PPP