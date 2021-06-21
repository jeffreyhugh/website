import Image from 'next/image';
import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import Highlight from "react-highlight";
import styles from "../styles/shared.module.css";
import textStyles from "../styles/text.module.css";

export default function content() {
    return (
        <>
            <Element>
                <span>
                    Please note this is a satirical piece written so professional JS developers can laugh at my lack of formal JS training.
                    I agree every language has gotchas, but I am of the opinion that these "gotchas" are just bad design.
                </span>
            </Element>

            <Element>
                <span>
                    <div className={textStyles.bold}>I will continue to update this post as I get more pissed off with JavaScript.</div>
                </span>
            </Element>

            <Spacer/>


            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    There are too many ways to define a function
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    Is the normal <code>int add(int x, int y)</code> too boring?
                    Lucky for you, JS has a plethora of ways to define a function and they all have the same outcome.
                </span>
            </Element>

            <Element>
                <Highlight language={'js'}>{`function add(x, y) {
    return (x + y)
}

const add = function(x, y) { 
    return (x + y) 
}

const add = (x, y) => {
    return (x + y)
}

const add = (x, y) => (x + y)`}
                </Highlight>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <Container>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                        Abstract vs Strict Equality Comparison
                    </div>
                    <div className={`${textStyles.small} ${textStyles.faint}`}>
                        (or, for us commonfolk, double equals vs triple equals)
                    </div>
                </Container>
            </HeaderPipe>

            <Element>
                <span>
                    This isn't as bad as some of the other stuff, but it can lead to some really weird behavior.
                    Since JS is loosely typed, the double-equals operator tries normalize types before comparing.
                    This means expressions like <code>10 == '10'</code> are truthy, even though <code>int</code> and <code>string</code> should not be directly comparable, let alone equal.
                </span>
            </Element>

            <Element>
                <span>
                    You can exploit the desire to normalize type by making your own <code>.toValue()</code> method.
                    This allows even stranger behavior like <code>a == 1 && a == 2 && a == 3</code> to be truthy.
                </span>
            </Element>

            <Element>
                <span>
                    <a href={"https://stackoverflow.com/a/48270314/7959316"}>StackOverflow</a>
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    Numbers are only 53 bits
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    If you want to use a 64-bit integer, go fuck yourself.
                    Alternatively, store it in a string.
                </span>
            </Element>

            <Element>
                <span>
                    <a href={"https://stackoverflow.com/a/38251272/7959316"}>StackOverflow</a>
                </span>
            </Element>

        </>
    )
}