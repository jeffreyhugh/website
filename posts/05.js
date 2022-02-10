import Image from 'next/image';
import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import styles from "../styles/shared.module.css";
import textStyles from "../styles/text.module.css";
import Code from "../components/code"
import Highlight from 'react-highlight';
import Link from 'next/link'

export default function content() {
    return (
        <>
            <Element>
                <span>
                    At the end of January, I got an email asking how to delete a message from <a href="https://told-you.so">told-you.so</a>.
                    By design, no one can delete a message.
                    That email got me wondering, though, how did anyone find the website?
                    I didn't advertise it at all, and it seems unlikely that someone would have stumbled across it.
                </span>
            </Element>

            <Element>
                <span>
                    I connected to the API and checked the logs.
                    For reference, these message IDs are sequential, so you can imagine my shock when I saw the last log had ID <Code>4378</Code>.
                    My first thought was that someone was just flooding the DB with random messages, so I thought I'd at least check what was filling the database.
                    (There is an option to encrypt the message client-side, so there's not really a point in checking the encrypted messages.)
                </span>
            </Element>

            <Element>
                <Highlight className='sql'>{`SELECT * FROM messages WHERE NOT encrypted ORDER BY id DESC;`}</Highlight>
            </Element>

            <Element>
                <span>
                    The few messages I combed through seemed to be legitimate users.
                    In fact, to my surprise, they were all fairly light-hearted and it seemed that the users were using the service as intended.
                </span>
            </Element>

            <Element>
                <span>
                    Obviously, the next step was to check Reddit, Google Trends, TikTok, and more for references to <Code>told-you.so</Code>.
                    Even though Google kept interpreting the domain name as the phrase "told you so", the searches all turned up negative.
                </span>
            </Element>

            <Element>
                <span>
                    Alright, fine.
                    If I can't figure out where the users are coming from, I can at least figure out when they started appearing.
                    At the time, you could put in your email to receive a link to your message, and I was using <a href="https://mailgun.com">Mailgun</a> to send the emails.
                    Thankfully, Mailgun has a beautiful and informative dashboard.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/05-00-mailgun.png"} width={700} height={416}
                    alt={"Mailgun sending logs"} className={styles.darkened} />
            </Element>

            <Element>
                <span>
                    The screenshot doesn't show it, but that first data point is 68.
                    That means we went from storing 0 messages a day to <span className={`${textStyles.italic}`}>68 messages</span> a day.
                    Oh, and that happened overnight.
                </span>
            </Element>

            <Element>
                <span>
                    Obviously, 68 messages doesn't guarantee 68 users.
                    One user may have stored 3 messages, meaning only 65 users storing 68 messages.
                    But still, that is remarkable growth to be happening overnight.
                </span>
            </Element>

            <Element>
                <span>
                    I whipped up a small Terms of Service and Privacy Policy to cover me on the off-chance that someone put a bomb threat or whatever on my server.
                    There's no endpoint for uploading images (by design), so I wasn't worried about users uploading images and videos that I could actually get in trouble for hosting.
                    Again, the messages I saw in the DB were fairly tame, but you never know what the end user is going to do.
                </span>
            </Element>

            <Element>
                <span>
                    While I was poking around the DB, I found references to <a href="https://boredbutton.com">BoredButton</a>, and I realized that was where all the traffic was coming from.
                    I had forgotten I applied to put my website on BoredButton a few weeks before, and it looks like they accepted it.
                </span>
            </Element>

            <Element>
                <span>
                    The next step was to figure out what was going on while the users were on the page.
                    I wasn't keen on the idea of using Google Analytics, but I figured Google Analytics could give me good information about visitors, and then my analytics platform could give me individual user information.
                </span>
            </Element>

            <Element>
                <span>
                    I got to work building an analytics platform.
                    The goal was to make something versatile that I could reuse for other projects, and I think it came out really good.
                    Obviously there's no documentation for how to use it, but there is a public stats page at <Link href="/stats/toldyouso"><a>queue.bot/stats/toldyouso</a></Link>.
                </span>
            </Element>

            <Element>
                <span>
                    You'll notice there's a pie graph showing how many users run adblockers.
                    Any guesses why I'm collecting that metric?
                    If you said "to run ads," you'd be correct.
                </span>
            </Element>

            <Element>
                <span>
                    <a href="https://vercel.com">Vercel</a> is an amazing host with incredibly generous limits to get new projects going.
                    Those free limits come at a price: you have to pay $20/mo for "commercial" pages, which include pages that run ads.
                    The price is not unreasonable, and it's a flat rate for any number of commercial pages.
                    I needed to figure out if I could serve enough ads to clear the $20/mo, hence the reason I started collecting the statistic.
                    It turns out 1,800 daily visitors storing almost 400 messages a day would, in fact, pay for a $20/mo hosting plan, even if about 25% of them run adblockers.
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/05-01-ga.png"} width={700} height={396}
                    alt={"Google Analytics stats"} className={styles.darkened} />
            </Element>

            <Element>
                <span>
                    I applied for Google AdSense 4 times, and was denied all 4 times.
                    The first 2 times were my fault, because they said their crawler couldn't reach my website, so it was considered "offline".
                    I ended up adding a <Code>robots.txt</Code> and explicitly allowing all crawlers, and that fixed the issue.
                    However, I was still denied due to "low-value content," and while that's probably a fair assessment, the website is getting a lot of traffic.
                    Hopefully I can get it approved soon, but until then, I'll be using Vercel's free plan and not hosting ads.
                </span>
            </Element>

            <Element>
                <span>
                    Overall, the project has been really fun, even if it hasn't been profitable.
                    I'm paying about $3/mo for the API host, and I use the API for other things besides told-you.so, so I'm fine losing that money for the next few months.
                    My plan is to make more stupid websites like this, get a cumulative 300,000 pageviews a month, then earn the right to talk with a Google ad specialist (i.e. a real person) so I can convince them to let me serve ads.
                    told-you.so's numbers indicate I should only need 2 more websites, because told-you.so is getting <span className={`${textStyles.bold}`}>100,000</span> pageviews a month.
                    That's an awesome feeling.
                </span>
            </Element>

            <Spacer />
        </>
    )
}