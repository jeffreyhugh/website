import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '../../components/meta'
import Date from '../../components/date'
import styles from "../../styles/shared.module.css"
import formStyles from "../../styles/form.module.css";
import textStyles from "../../styles/text.module.css"
import HeaderPipe from "../../components/headerPipe";
import BigContainer from "../../components/bigContainer";
import Spacer from "../../components/spacer";
import Container from "../../components/container";
import Element from "../../components/element";
import useSWR from 'swr';
import { DateTime } from 'luxon'
import { useState } from 'react'
import { useRouter } from 'next/router'

import BillboardChart from "react-billboardjs";

const Analytics = ({ metricProp }) => {
    const router = useRouter();

    const metrics = {
        "last_30m": {
            from: DateTime.now().minus({ minutes: 30 }).toISO(),
            to: DateTime.now().toISO(),
            bucket: "1m",
        },
        "last_1h": {
            from: DateTime.now().minus({ hours: 1 }).toISO(),
            to: DateTime.now().toISO(),
            bucket: "1m",
        },
        "current_1h": {
            from: DateTime.now().plus({ hours: 1 }).startOf('hour').minus({ hours: 1 }).toISO(),
            to: DateTime.now().plus({ hours: 1 }).startOf('hour').toISO(),
            bucket: "1m",
        },
        "last_24h": {
            from: DateTime.now().plus({ hours: 1 }).startOf('hour').minus({ days: 1 }).toISO(),
            to: DateTime.now().plus({ hours: 1 }).startOf('hour').toISO(),
            bucket: "1h",
        },
        "current_24h": {
            from: DateTime.now().plus({ days: 1 }).startOf('day').minus({ days: 1 }).toISO(),
            to: DateTime.now().plus({ days: 1 }).startOf('day').toISO(),
            bucket: "1h",
        },
        "current_30d": {
            from: DateTime.now().plus({ months: 1 }).startOf('month').minus({ months: 1 }).toISO(),
            to: DateTime.now().plus({ months: 1 }).startOf('month').toISO(),
            bucket: "24h",
        }
    }

    const [selectedMetric, setSelectedMetric] = useState(metricProp)

    const fetcher = (tags, m) => fetch("https://api.queue.bot/stats/v1/fetch", {
        method: "POST",
        body: JSON.stringify({
            tags: tags,
            from: metrics[m].from,
            to: metrics[m].to,
            bucket: metrics[m].bucket,
        }, {
            refreshInterval: 5000,
        })
    }).then(res => res.json())

    const tags = [
        "toldyouso-canDisplayAds",
        "toldyouso-canNotDisplayAds",
        "toldyouso-messageEncrypted",
        "toldyouso-messageNotEncrypted",
        "toldyouso-unsubscribe",
        "toldyouso-messageCopy",
    ]
    Object.keys(metrics).forEach(k => { useSWR([tags, k], fetcher) })
    const { data, error } = useSWR([tags, selectedMetric], fetcher)

    return (
        <Meta>
            <Head>
                <title>{"QueueBot - Stats"}</title>
            </Head>
            <BigContainer>
                <Spacer />
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>QueueBot - Stats
                        </div>
                        <div className={`${textStyles.large}`}>told-you.so</div>
                    </Container>
                </HeaderPipe>

                <Spacer />

                <Element>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {[
                            { name: "last_30m", label: "Last 30m" },
                            { name: "last_1h", label: "Last 1h" },
                            { name: "current_1h", label: "Current 1h" },
                            { name: "last_24h", label: "Last 24h" },
                            { name: "current_24h", label: "Current 24h" },
                            { name: "current_30d", label: "Current 30d" },
                        ].map(m => (
                            // <div className={`${formStyles.buttonWrapper}`}>
                            <button className={`${selectedMetric === m.name ? formStyles.button : formStyles.buttonBlank}`}
                                onClick={() => { setSelectedMetric(m.name); router.replace(`/stats/toldyouso?t=${m.name}`) }}
                                style={{ flexGrow: 0 }} key={m.name}>
                                {m.label}
                            </button>
                            // </div>
                        ))}
                    </div>
                </Element>

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> Messages and Copies
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data ?
                        error ?
                            <span>Could not load data</span> :
                            <span>
                                <i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...
                            </span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Messages"].concat(data.data["toldyouso-canDisplayAds"].map((x, i) => x + data.data["toldyouso-canNotDisplayAds"][i])),
                                ["Copies"].concat(data.data["toldyouso-messageCopy"]),
                            ],
                            type: "bar",
                            colors: {
                                "Messages": "#b9b9b9",
                                "Copies": "#676767",
                            },
                        }} axis={{
                            x: {
                                type: "timeseries",
                                tick: {
                                    format: "%m-%d-%Y %H:%M",
                                    autorotate: true,
                                    rotate: 15,
                                }
                            }
                        }} />
                    }
                </Element>

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> AdBlockers
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data ?
                        error ?
                            <span>Could not load data</span> :
                            <span>
                                <i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...
                            </span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Not Enabled"].concat(data.data["toldyouso-canDisplayAds"]),
                                ["Enabled"].concat(data.data["toldyouso-canNotDisplayAds"]),
                            ],
                            type: "pie",
                            colors: {
                                "Not Enabled": "#b9b9b9",
                                "Enabled": "#676767",
                            },
                        }} axis={{
                            x: {
                                type: "timeseries",
                                tick: {
                                    format: "%m-%d-%Y %H:%M",
                                    autorotate: true,
                                    rotate: 15,
                                }
                            }
                        }} />
                    }
                </Element>

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> Message Encryption
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data ?
                        error ?
                            <span>Could not load data</span> :
                            <span style={{ backgroundColor: "#0f0f0f" }} ><i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...</span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Encrypted"].concat(data.data["toldyouso-messageEncrypted"]),
                                ["Unencrypted"].concat(data.data["toldyouso-messageNotEncrypted"]),
                            ],
                            type: "pie",
                            colors: {
                                "Encrypted": "#b9b9b9",
                                "Unencrypted": "#676767",
                            },
                            groups: [
                                ["Encrypted", "Unencrypted"]
                            ]
                        }} axis={{
                            x: {
                                type: "timeseries",
                                tick: {
                                    format: "%m-%d-%Y %H:%M",
                                    autorotate: true,
                                    rotate: 15,
                                }
                            }
                        }} />}
                </Element>
            </BigContainer>
        </Meta>
    )
}

export const getServerSideProps = async (ctx) => {
    const t = ctx.query.t;
    return {
        props: {
            metricProp: t,
        }
    }
}

export default Analytics