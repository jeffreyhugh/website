import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import textStyles from "../styles/text.module.css";

export default function content() {
    return (
        <>
            <Element>
                <span>
                    The perfect voicemail is concise and sets the agenda for their return call.
                    Ideally, it's 30 seconds or shorter.
                </span>
            </Element>

            <Element>
                <span>
                    Consider this example.
                </span>
            </Element>

            <Element>
                <pre>{`Hi David, this is Henry Wolfe calling on Monday at about 11:15 AM.
I'm calling to discuss your lunch meat preference for the gathering this Saturday.
Give me a call back at (505) 555-2543 when you get a chance.
One more time, that's (505) 555-2543.
Talk to you soon.`}
                </pre>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    There are 3 key elements to any good voicemail:
                    <ul>
                        <li>Introduction and background information</li>
                        <li>Purpose</li>
                        <li>Call to action</li>
                    </ul>
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"introduction"}>
                    Introduction and Background Information
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    When I leave a voicemail, I play it safe and assume the receiver has the most basic of phones without caller ID, transcriptions, or the time the voicemail was placed.
                    As such, I try to leave this information in the voicemail directly.
                    It doesn't need to be much; in the example above, it was literally one sentence.
                    This step 1) adds legitimacy to the message (because telemarketers usually don't leave this information), and 2) allows them to make a snap decision about the priority of the message based on who you are.
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"purpose"}>
                    Purpose
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    This is the most important element by far.
                    This segment sets the expectation for discussion when they return your call, allowing them to prepare meaningful information to relay.
                    Their preparation ultimately prevents time-wasting from either party.
                    While this is usually the longest part of my voicemails, I do my best to keep it short enough so they can put the phone down, walk to get a pen and paper, and take accurate notes of the voicemail without having to re-listen.
                </span>
            </Element>

            <Element>
                <span>
                    <strong>Absolutely do not omit this section</strong>, even if you think they should know what you're calling about.
                    I immediately flag voicemails without a return call agenda as <strong>ultra</strong>-low priority because there's no telling how long the reply call will go for.
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={"action"}>
                    Call to Action
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    Circumvent natural human laziness by telling the recipient exactly what they need to do in response to the voicemail.
                    This also gives you a chance to put your own priority label on the message.
                    For example, a message that closes with "call me as soon as possible" is obviously higher priority than "call me at your convenience."
                </span>
            </Element>

            <Element>
                <span>
                    Your call to action can be something other than requesting a call back.
                    For example, you can ask them to send you an email or inform them that no further action is required.
                    The underlying goal is to eliminate ambiguity.
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    Other Notes
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    If you're requesting them to get back in touch with you, leave contact information and repeat it. Assume the recipient will hear your email or number for the first time, then start fumbling for a pen and paper to write it down.
                    Repeating your contact info saves them the pain of having to listen to the voicemail again.
                </span>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    Add a kind farewell (unless the nature of your voicemail is not kind, in which case make the farewell more stern).
                    This leaves a good lasting impression and makes the recipient look forward to calling you back.
                </span>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    Speak clearly.
                    Most phones have terrible speakers and microphones, meaning thorough pronunciation is very important to help the recipient understand what you want.
                </span>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    Most importantly: <strong>keep it short</strong>.
                </span>
            </Element>
        </>
    )
}