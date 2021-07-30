import Image from 'next/image';
import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import textStyles from "../styles/text.module.css";

export default function content() {
    return (
        <>
            <HeaderPipe>
                <Container>
                    <div className={`${textStyles.xlarge}`}>
                        Highest offer - $2,900
                    </div>
                    <div>
                        on July 30, 2021 (with proof of funds)
                    </div>
                </Container>
            </HeaderPipe>

            <Spacer/>

            <Element>
                <span>
                    The other day, I got a DM on Discord.
                    I get a lot of random DMs (<span className={textStyles.italic}>chad noises intensify</span>), but the ones with broken English usually go about the same way.
                </span>
            </Element>

            <Element>
                <pre>{`** sends friend request even though my DMs are open **
                
them: hi, how r u?
me  : can't complain, how can I help you?

** 20 minutes of intense silence **

them: can i ask u a question?
me  : sure
them: please be understanding. are you willing to sell your account?`}
                </pre>
            </Element>

            <Element>
                <span>
                    (Side note: <a href={"https://dontasktoask.com"}>don't ask to ask</a>)
                </span>
            </Element>

            <Element>
                <span>
                    At this point, I usually try to engage them.
                    I think this habit started with tech support scammers, who I often engage because every second they're talking to me is a second they're not talking to someone who's actually vulnerable.
                    Nine times out of ten, there's nothing malicious about what these folks are doing, but every once in a while, you get someone sending a token stealer with some obfuscated JS.
                </span>
            </Element>

            <Element>
                <span>
                    Anyway, the DM I got the other day started with $850 and worked its way up to $1,050 even though I said "no thanks" to every offer.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/02-00-offer-screenshot.png"} width={394} height={854}
                       alt={"Offered $1,050"}/>
            </Element>

            <Element>
                <span>
                    The reason my account is worth so much to these individuals is because I have a little blue badge that says "Early Verified Bot Developer".
                    I'm incredibly proud of this badge because I had been working on my bot called VC2 for a few years when I was invited to apply.
                    However, this badge is no longer attainable after people started <a
                    href={"https://github.com/discord/discord-api-docs/issues/1991"}>spamming bot verification requests in attempt to get the badge</a>.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/02-01-my-profile.png"} width={304} height={180} alt={"My profile"}/>
            </Element>

            <Element>
                <span>
                    I get an offer like this about once every two weeks.
                    Realistically, I don't see myself ever selling my account because it's been a huge part of my life for <a
                    href={"https://www.pixelatomy.com/snow-stamp/?s=224937673922445312"}>nearly 5 years</a>.
                    Nonetheless, I'll keep my DMs open just in case someone offers seven figures for it.
                </span>
            </Element>
        </>
    )
}