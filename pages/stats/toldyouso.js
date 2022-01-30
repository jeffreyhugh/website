import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '../../components/meta'
import Date from '../../components/date'
import styles from "../../styles/shared.module.css"
import textStyles from "../../styles/text.module.css"
import HeaderPipe from "../../components/headerPipe";
import BigContainer from "../../components/bigContainer";
import Spacer from "../../components/spacer";
import Container from "../../components/container";
import Element from "../../components/element";
import useSWR from 'swr';
import { DateTime } from 'luxon'

import BillboardChart from "react-billboardjs";

const Analytics = () => {

    const fetcher = (...args) => fetch("https://api.queue.bot/stats/v1/fetch", {
        method: "POST",
        body: JSON.stringify({
            tags: [
                "toldyouso-canDisplayAds",
                "toldyouso-canNotDisplayAds",
            ],
            from: DateTime.now().minus({ days: 1 }).toISO(),
            to: DateTime.now().toISO(),
            bucket: "1h",
        }, {
            refreshInterval: 1000 * 60 * 60,
        })
    }).then(res => res.json()).catch(err => console.log(err))

    const fetcher_encryptedVsUnencrypted = (...args) => fetch("https://api.queue.bot/stats/v1/fetch", {
        method: "POST",
        body: JSON.stringify({
            tags: [
                "toldyouso-messageEncrypted",
                "toldyouso-messageNotEncrypted",
            ],
            from: DateTime.now().minus({ days: 1 }).toISO(),
            to: DateTime.now().toISO(),
            bucket: "1h",
        }, {
            refreshInterval: 1000 * 60 * 60,
        })
    }).then(res => res.json()).catch(err => console.log(err))

    const fetcher_unsubscribes = (...args) => fetch("https://api.queue.bot/stats/v1/fetch", {
        method: "POST",
        body: JSON.stringify({
            tags: [
                "toldyouso-unsubscribe",
            ],
            from: DateTime.now().minus({ days: 1 }).toISO(),
            to: DateTime.now().toISO(),
            bucket: "1h",
        }, {
            refreshInterval: 1000 * 60 * 60,
        })
    }).then(res => res.json()).catch(err => console.log(err))

    const swr1 = useSWR('adsVsNoAds', fetcher)
    const data_adsVsNoAds = swr1.data, error_adsVsNoAds = swr1.error
    const swr2 = useSWR('encryptedVsUnencrypted', fetcher_encryptedVsUnencrypted)
    const data_encryptedVsUnencrypted = swr2.data, error_encryptedVsUnencrypted = swr2.error
    const swr3 = useSWR('unsubscribes', fetcher_unsubscribes)
    const data_unsubscribes = swr3.data, error_unsubscribes = swr3.error

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

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> Total Messages
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data_adsVsNoAds ?
                        error_adsVsNoAds ?
                            <span>Could not load data</span> :
                            <span>
                                <i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...
                            </span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data_adsVsNoAds["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Total Messages"].concat(data_adsVsNoAds.data["toldyouso-canDisplayAds"].map((x, i) => x + data_adsVsNoAds.data["toldyouso-canNotDisplayAds"][i])),
                            ],
                            type: "bar",
                            colors: {},
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

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> AdBlockers Enabled
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data_adsVsNoAds ?
                        error_adsVsNoAds ?
                            <span>Could not load data</span> :
                            <span>
                                <i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...
                            </span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data_adsVsNoAds["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Not Enabled"].concat(data_adsVsNoAds.data["toldyouso-canDisplayAds"]),
                                ["Enabled"].concat(data_adsVsNoAds.data["toldyouso-canNotDisplayAds"]),
                            ],
                            type: "bar",
                            colors: {
                                "Not Enabled": "#00ff00",
                                "Enabled": "#ff0000",
                            },
                            groups: [
                                ["Not Enabled", "Enabled"]
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

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> Message Encryption
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data_encryptedVsUnencrypted ?
                        error_encryptedVsUnencrypted ?
                            <span>Could not load data</span> :
                            <span style={{ backgroundColor: "#0f0f0f" }} ><i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...</span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data_encryptedVsUnencrypted["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Encrypted"].concat(data_encryptedVsUnencrypted.data["toldyouso-messageEncrypted"]),
                                ["Unencrypted"].concat(data_encryptedVsUnencrypted.data["toldyouso-messageNotEncrypted"]),
                            ],
                            type: "bar",
                            colors: {
                                "Encrypted": "#00ff00",
                                "Unencrypted": "#ff0000",
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

                <Spacer />

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.large} ${textStyles.bold} ${textStyles.gradient}`}> Unsubscribes
                        </div>
                    </Container>
                </HeaderPipe>
                <Element>
                    {!data_unsubscribes ?
                        error_unsubscribes ?
                            <span>Could not load data</span> :
                            <span>
                                <i className={"fa fa-circle-o-notch fa-spin"} aria-hidden /> Loading...
                            </span> :
                        <BillboardChart data={{
                            x: "x",
                            xFormat: "%m-%d-%Y %H:%M",
                            columns: [
                                ["x"].concat(data_unsubscribes["x"].map(x => DateTime.fromISO(x).toFormat("MM-dd-yyyy HH:mm"))),
                                ["Unsubscribes"].concat(data_unsubscribes.data["toldyouso-unsubscribe"]),
                            ],
                            type: "bar",
                            colors: {},
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

export default Analytics