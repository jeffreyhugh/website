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


export default function Link() {
    const [links, setLinks] = useState([])
    async function handleSubmit(event) {
        event.preventDefault()
        const ids = ["slug", "destination", "permanent", "password", "submit"]
        ids.forEach(id => document.getElementById(id).disabled = true)
        const res = await fetch("https://api.queue.bot/link/v1/add", {
            method: 'POST',
            headers: {
                Authorization: "Basic " + btoa("queuebot:" + event.target.password.value),
            },
            body: JSON.stringify({
                slug: event.target.slug.value,
                destination: event.target.destination.value,
                permanent: event.target.permanent.value,
            })
        })

        console.log(res.status)

        if (res.status === 200) {
            event.target.slug.value = ""
            event.target.destination.value = ""
            res.json().then(j => {
                setLinks(existingLinks => [{
                    slug: j.slug,
                    destination: j.destination,
                    status: res.status,
                }, ...existingLinks])
            })
        } else {
            setLinks(existingLinks => [{
                slug: event.target.slug.value,
                destination: event.target.destination.value,
                status: res.status,
            }, ...existingLinks])
        }

        ids.forEach(id => document.getElementById(id).disabled = false)
    }

    return (
        <Meta>
            <Head>
                <title>{"QueueBot - Link"}</title>
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
                            Short Links
                        </div>
                        <div className={`${textStyles.large}`}>
                            
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer />
                <Element>
                    <form onSubmit={handleSubmit} className={formStyles.parent}>
                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="slug">Slug
                            <div className={`${formStyles.textBoxShadowWrapper}`}>
                                <div className={`${formStyles.textBoxShadow}`} />
                                <input className={`${formStyles.textBox}`} id="slug" type="text" placeholder="(Leave blank for random)" />
                            </div>
                        </label>

                        <HalfSpacer />

                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="destination">Destination
                            <div className={`${formStyles.textBoxShadowWrapper}`}>
                                <div className={`${formStyles.textBoxShadow}`} />
                                <input className={`${formStyles.textBox}`} id="destination" type="text" placeholder="https://example.com" required />
                            </div>
                        </label>

                        <HalfSpacer />

                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="permanent">Permanent Redirect
                            <div style={{ width: "2rem" }}>
                                <div className={`${formStyles.checkBoxShadowWrapper}`}>
                                    <div className={`${formStyles.checkBoxShadow}`} />
                                    <input className={`${formStyles.defaultCheckBox}`} id="permanent" type="checkbox" />
                                    <span className={`${formStyles.checkBox}`} />
                                </div>
                            </div>
                        </label>

                        <HalfSpacer />

                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="password">Password
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
                        <div style={{whiteSpace: 'nowrap'}}>
                        {link.status === 200 ?
                            <><span className={`${textStyles.a}`} onClick={async e => {
                                await navigator.clipboard.writeText(`https://queue.bot/link/${link.slug}`);
                            }}>{link.slug}</span>&nbsp;(click to copy) &rarr;&nbsp;<a href={link.destination}>{link.destination}</a> &nbsp;({link.status})</> :
                            <>{link.slug ? link.slug : "n/a"}&nbsp;&rarr;&nbsp;<a href={link.destination}>{link.destination}</a> &nbsp;({link.status})</>
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