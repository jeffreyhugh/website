import Image from 'next/image';
import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import styles from "../styles/shared.module.css";
import textStyles from "../styles/text.module.css";
import Keyboard from "../components/keyboard";

export default function content() {
    return (
        <>
            <Element>
                <span>
                    I use a "Planck" (or 40% ortholinear) keyboard for just about everything on a computer now.
                    The term "ortholinear" just means all the keys are aligned such that the keys are in a grid.
                    The percentage refers to the number of keys on the board relative to a "full-sized" keyboard (which is a keyboard with a number row, function row, insert/home/etc, arrow keys, and numpad).
                </span>
            </Element>

            <Spacer/>

            <Element>
                <span>
                    Here's an example of a <a href={'https://drop.com/buy/planck-mechanical-keyboard'}>Planck Keyboard from Drop</a>:
                </span>
            </Element>

            <Element>
                <Image src={"/images/posts/00-00-drop-planck.jpg"} width={700} height={467}
                       alt={"Drop Planck Keyboard"} className={styles.darkened}/>
            </Element>

            <Element>
                <span>
                    Pretty spiffy, right?
                    Mine has blank keys and 2x 1U spacebar keys instead of 1x 2U spacebar at the bottom.
                    However, it's incredibly similar.
                </span>
            </Element>

            <Element>
                <span>
                    The hardest part was easily getting used to the ortholinear layout.{' '}
                    <a href={"https://ux.stackexchange.com/a/40403"}>Staggered rows</a> are a leftover artifact of the typewriter's physical arms.
                    The stagger may seem insignificant, but it's a surprisingly large nuisance when moving to ortho or back to staggered.
                    I personally find it very difficult to type on a staggered keyboard at full speed because I've gotten used to the ortho layout.
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    But what about the numbers and symbols?
                </div>
            </HeaderPipe>

            <Spacer/>

            <Element>
                <span>
                    There are two keys to the left and right of the spacebar.
                    They are called the "lower" and "raise" keys (respectively), and, while depressed, toggle different layers.
                    For example, to type a <code>-</code> (dash), my keyboard uses <code>raise</code> + <code>j</code>.
                </span>
            </Element>

            <Element>
                <span>
                    There are 3 main layers on my keyboard.
                    The <code>raise</code> and <code>lower</code> keys have been replaced with <code>MO n</code> keys, which stands for "momentary on".
                    The number <code>n</code> refers to which layer to turn on while the key is depressed.
                </span>
            </Element>

            <Element>
                <Keyboard label={"Primary (Layer 0)"} rows={[
                    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'bksp'],
                    ['` ~', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '; :', '\' "'],
                    ['shft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', <', '. >', '/ ?', 'entr'],
                    ['ctrl', 'win', ' ', 'alt', 'MO 1', 'sp', 'sp', 'MO 2', 'left', 'down', 'up', 'rght']
                ]}/>
            </Element>

            <Element>
                <Keyboard label={"Lower (Layer 1)"} rows={[
                    ['esc', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 'bksp'],
                    ['` ~', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', '_', '+', '{', '}', '|'],
                    ['shft', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', ' ', ' ', ' ', ' ', ' '],
                    ['ctrl', 'win', ' ', 'alt', 'MO 1', 'sp', 'sp', 'MO 2', 'home', 'pgdn', 'pgup', 'end']
                ]}/>
            </Element>

            <Element>
                <Keyboard label={"Raise (Layer 2)"} rows={[
                    ['esc', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', 'del'],
                    ['` ~', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', '- _', '= +', '[ {', '] }', '\\ |'],
                    ['shft', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', ' ', 'TO 5', ' ', ' ', 'prtsc'],
                    ['ctrl', 'win', ' ', 'alt', 'MO 1', 'sp', 'sp', 'MO 2', ' ', ' ', ' ', ' ']
                ]}/>
            </Element>

            <Element>
                <span>
                    The biggest advantage is that all the symbols are super close to the home row, meaning I can press them without moving my hands too much (if at all).
                    This is in stark contrast to a staggered keyboard, where I developed the bad habit of shifting my hand and using my middle finger to press characters like <code>=</code>.
                </span>
            </Element>

            <Element>
                <span>
                    (The button three spaces to the left of <code>prtsc</code> reading <code>TO 5</code> means "toggle on layer 5".
                    Unlike <code>MO</code>, <code>TO</code> will turn the layer on until another layer is turned on, even if the key is released.)
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    Can you use it for gaming?
                </div>
            </HeaderPipe>

            <Spacer/>

            <Element>
                <span>
                    Absolutely!
                    I couldn't find any existing layouts for gaming on a Planck, so I had to come up with this design.
                    It works fairly well because I have long fingers, and because I have 2x 1U spacebars instead of a single 2U spacebar.
                </span>
            </Element>

            <Element>
                <Keyboard label={"Game (Layer 5)"} rows={[
                    ['esc', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', 'TO 0'],
                    ['tab', 'q', 'w', 'e', 'r', 't', 'y', ' ', ' ', ' ', ' ', ' '],
                    ['shft', 'a', 's', 'd', 'f', 'g', ' ', 'win', ' ', ' ', ' ', 'entr'],
                    ['ctrl', 'z', 'x', 'c', 'v', 'b', 'sp', 'alt', 'left', 'down', 'up', 'rght']
                ]}/>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                    Parts
                </div>
            </HeaderPipe>

            <Spacer/>

            <Element>
                <ul>
                    <li><a
                        href={"https://kbdfans.com/collections/gateron-swithes/products/gateron-swtich-3pin-or-5pin?variant=35765200333"}>Gateron
                        Clear 5-pin switches</a></li>
                    <li><a href={"https://drop.com/buy/datamancer-planck-hardwood-case"}>Drop Datamancer Planck (cherry
                        wood)</a></li>
                    <li><a href={"https://kbdfans.com/collections/40/products/niu-mini-40-pcb-full-program"}>KBDFans NIU
                        Mini</a></li>
                    <li><a href={"https://kbdfans.com/collections/keycaps/products/dsa-blank-keycaps-1u-10pcs"}>Some
                        cheap keycaps</a></li>
                </ul>
            </Element>

            <Spacer/>
        </>
    )
}