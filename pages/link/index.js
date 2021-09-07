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
import { useState } from "react";


export default function Link() {
    const [links, setLinks] = useState([])
    async function handleSubmit(event) {
        event.preventDefault()
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
                            Add, Update, or Remove
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer />
                <form onSubmit={handleSubmit}>
                    <Element>
                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="slug">Slug</label>
                    </Element>
                    <Element>
                        <div className={`${formStyles.textBoxShadowWrapper}`}>
                            <div className={`${formStyles.textBoxShadow}`} />
                            <input className={`${formStyles.textBox}`} id="slug" type="text" placeholder="(Leave blank for random)" />
                        </div>
                    </Element>

                    <HalfSpacer />

                    <Element>
                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="destination">Destination</label>
                    </Element>
                    <Element>
                        <div className={`${formStyles.textBoxShadowWrapper}`}>
                            <div className={`${formStyles.textBoxShadow}`} />
                            <input className={`${formStyles.textBox}`} id="destination" type="text" placeholder="https://example.com" required />
                        </div>
                    </Element>

                    <HalfSpacer />

                    <Element>
                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="permanent">Permanent Redirect</label>
                        <div className={`${formStyles.checkBoxShadowWrapper}`}>
                            <div className={`${formStyles.checkBoxShadow}`} />
                            <input className={`${formStyles.defaultCheckBox}`} id="permanent" type="checkbox" />
                            <span className={`${formStyles.checkBox}`} />
                        </div>
                    </Element>

                    <HalfSpacer />

                    <Element>
                        <label className={`${textStyles.xlarge} ${textStyles.bold} ${formStyles.textBoxLabel}`} htmlFor="password">Password</label>
                    </Element>
                    <Element>
                        <div className={`${formStyles.textBoxShadowWrapper}`}>
                            <div className={`${formStyles.textBoxShadow}`} />
                            <input className={`${formStyles.textBox}`} id="password" type="password" placeholder="••••••••" required />
                        </div>
                    </Element>

                    <Element>
                        <button type="submit" className={`${formStyles.button}`}>
                            <span className={`${textStyles.bold}`}>Submit</span>
                        </button>
                    </Element>
                </form>

                <Spacer />

                {links.map(link => (
                    <Element>
                        {link.status === 200 ? 
                            <><a href={`https://queue.bot/link/${link.slug}`}>{link.slug}</a>&nbsp;&rarr;&nbsp;<a href={link.destination}>{link.destination}</a> &nbsp;({link.status})</> : 
                            <>{link.slug}&nbsp;&rarr;&nbsp;<a href={link.destination}>{link.destination}</a> &nbsp;({link.status})</>
                        }
                    </Element>
                ))}
                
                <Spacer/>
            </BigContainer>
        </Meta>
    )
}