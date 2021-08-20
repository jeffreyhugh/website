import Image from 'next/image';
import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import styles from "../styles/shared.module.css";
import textStyles from "../styles/text.module.css";

export default function content() {
    return (
        <>
            <Element>
                <span>
                    VPN as a Service can be great under certain circumstances.
                    Unfortunately, a most of the time, they're marketed as the one-click stop for privacy and vulnerable consumers, who do not know what a VPNs <strong>actually</strong> do, are easy targets.
                </span>
            </Element>

            <Spacer />

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    What is VPN as a Service?
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    VPN as a Service (VPNaaS) is when a company sells bandwidth on their VPNs to consumers.
                    Common examples include NordVPN, ExpressVPN, and TunnelBear.
                </span>
            </Element>

            <Spacer />

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    What is "the correct use case" for VPNaaS?
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    VPNs in general are not designed to be anonymous proxies; we have TOR for anonymous proxying.
                    Instead, they're designed to connect devices across a WAN into a virtualized LAN (or <strong>v</strong>irtual <strong>p</strong>rivate <strong>n</strong>etwork).
                </span>
            </Element>

            <Element>
                <span>
                    The "correct use case" for VPNaaS falls into one of three categories:
                    <ul>
                        <li>You're on a known hostile network (e.g. Starbuck's wifi)</li>
                        <li>You want to hide DNS requests from your sysadmins and/or ISP</li>
                        <li>You want to bypass geo-restricted content</li>
                    </ul>
                </span>
            </Element>

            <Spacer />

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    They're not one-click solutions to privacy
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    When we realized we were going to run out of IPv4 addresses for all IoT devices, we started using "network address translation" (NAT), which tells your router to proxy all requests from local devices.
                    In this way, each router can be assigned a single public IPv4 address, then all outgoing and incoming requests to devices on one network could use the same public IPv4 address.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/04-00-nat.jpg"} width={797} height={314}
                    alt={"Network Address Translation (NAT)"} className={styles.darkened} />
            </Element>

            <Element>
                <span className={textStyles.small}>
                    (courtesty of <a href={"https://commons.wikimedia.org/wiki/File:Network_Address_Translation_(file1).jpg"}>Wikipedia</a>)
                </span>
            </Element>

            <Element>
                <span>
                    The side effect is if you, your dog, and your cat were all watching YouTube from your own computers, YouTube would only see traffic from one IP serving all three of you.
                    In order to track individual devices, they do not rely on IP addresses; they rely on cookies, user agents, screen resolution, keyboard/mouse heuristics, and more.
                    Even if you change your public IP address (which is what a VPN does), something else (most likely cookies) will give your true identity away.
                </span>
            </Element>

            <Spacer />

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    What does VPNaaS actually do?
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    Some clients have some advanced features like DNS hijacking or NAT, but for the most part, VPNaaS just changes your public IP address.
                </span>
            </Element>

            <Spacer />

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    Should I keep paying for VPNaaS?
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    If you're just buying it because you're scared about being tracked or hacked online, absolutely not; VPNaaS is not the right tool for the job.
                    However, if you're using it for one of the three aforementioned cases, then sure, why not?
                    Just remember it's not going to protect you from being tracked by YouTube, Google, etc.
                </span>
            </Element>

            <Element>
                <span>
                    One more time, the three "correct use cases" for VPNaaS are:
                    <ul>
                        <li>You're on a known hostile network (e.g. Starbuck's wifi)</li>
                        <li>You want to hide DNS requests from your sysadmins and/or ISP</li>
                        <li>You want to bypass geo-restricted content</li>
                    </ul>
                </span>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    (If you have the technical know-how, you can set up your own VPN that's probably better than VPNaaS for cases 1 and 2.
                    If your VPS host is in another country, it's preferrable to VPNaaS for cases 1, 2, and 3.
                    I recommend trying <a href={"https://www.wireguard.com/"}>WireGuard</a>.)
                </span>
            </Element>
        </>
    )
}