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
import { useState } from "react";

export default function PB() {
    const [links, setLinks] = useState([])
    async function handleSubmit(event) {
        event.preventDefault()
        const ids = ["pbContent", "password", "submit"]
        ids.forEach(id => document.getElementById(id).disabled = true)
        const res = await fetch("https://api.queue.bot/pb/v1/add", {
            method: 'POST',
            headers: {
                Authorization: "Basic " + btoa("queuebot:" + event.target.password.value),
            },
            body: JSON.stringify({
                body: event.target.pbContent.value,
            })
        })

        console.log(res.status)

        if (res.status === 200) {
            event.target.pbContent.value = ""
            res.json().then(j => {
                setLinks(existingLinks => [{
                    slug: j.slug,
                    status: res.status,
                }, ...existingLinks])
            })
        } else {
            setLinks(existingLinks => [{
                slug: "",
                status: res.status,
            }, ...existingLinks])
        }

        ids.forEach(id => document.getElementById(id).disabled = false)
    }

    return (
        <Meta>
            <Head>
                <title>{"QueueBot - Pastebin"}</title>
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
                        <div className={`${textStyles.large}`}>

                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer />
                <Element>
                    <form onSubmit={handleSubmit} className={formStyles.bigParent} id={"_form"}>

                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="pbContent">
                            <span className={`${formStyles.textBoxLabelText}`}>Content</span>
                            <div className={`${formStyles.textBoxShadowWrapper}`}>
                                <div className={`${formStyles.textBoxShadow}`} />
                                <textarea className={`${formStyles.textBox} ${textStyles.mono} ${formStyles.textArea}`} id="pbContent" rows={7} placeholder={"print(\"hello, world\")"} required />
                            </div>
                        </label>

                        <HalfSpacer />

                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="password">
                            <span className={`${formStyles.textBoxLabelText}`}>Password</span>
                            <div className={`${formStyles.textBoxShadowWrapper}`}>
                                <div className={`${formStyles.textBoxShadow}`} />
                                <input className={`${formStyles.textBox}`} id="password" type="password" placeholder="••••••••" required />
                            </div>
                        </label>

                        <div className={`${formStyles.buttonWrapper}`}>
                            <button type="submit" id="submit" className={`${formStyles.button}`}>
                                <span className={`${textStyles.bold}`}>Submit</span>
                            </button>
                        </div>

                    </form>
                </Element>

                <Spacer />

                {links.map(link => (
                    <Element>
                        <div style={{ whiteSpace: 'nowrap' }}>
                            {link.status === 200 ?
                                <>
                                    <span className={`${textStyles.a}`} onClick={async e => {
                                        await navigator.clipboard.writeText(`https://queue.bot/pb/${link.slug}.txt`);
                                    }}>
                                        {link.slug}
                                    </span>
                                    &nbsp;(click to copy) &rarr;&nbsp;({link.status})
                                </> :
                                <>{link.slug ? link.slug : "n/a"}&nbsp;&rarr;&nbsp;({link.status})</>
                            }
                        </div>
                    </Element>
                ))}

                <Spacer />
                <BackHome />
            </BigContainer>
        </Meta>
    )
}