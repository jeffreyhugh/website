import Element from "../components/element";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import Container from "../components/container";
import Highlight from "react-highlight";
import textStyles from "../styles/text.module.css";
import Code from "../components/code";

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
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={0}>
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

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={1}>
                    There are too many ways to define a function
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    Is the normal <Code>int add(int x, int y)</Code> too boring?
                    Lucky for you, JS has a plethora of ways to define a function and they all have the same outcome.
                </span>
            </Element>

            <Element>
                <Highlight className={'js'}>{`function add(x, y) {
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
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={2}>
                        Abstract vs strict equality comparison
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
                    This means expressions like <Code>10 == '10'</Code> are truthy, even though <Code>int</Code> and <Code>string</Code> should not be directly comparable, let alone equal.
                </span>
            </Element>

            <Element>
                <span>
                    You can exploit the desire to normalize type by making your own <Code>.toValue()</Code> method.
                    This allows even stranger behavior like <Code>a == 1 && a == 2 && a == 3</Code> to be truthy.
                </span>
            </Element>

            <Element>
                <span>
                    <a href={"https://stackoverflow.com/a/48270314/7959316"}>StackOverflow</a>
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={3}>
                    Mismatched type concatenation
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    Again, this has to do with JS's desire to normalize types. Consider the following pseudo-code.
                </span>
            </Element>

            <Element>
                <pre>{`a := 2
b := "3.5"
c := a + b
print(c)`}
                </pre>
            </Element>

            <Element>
                <span>
                    The astute among you may have noticed <Code>a</Code> and <Code>b</Code> are different types. Different languages handle this differently.
                </span>
            </Element>

            <Element>
                <Highlight className={"c"}>{`// C
...
int main() {
    int a = 2;
    char b[] = "3.5";
    int c = a + b;
    printf("%d\\n", c);
}`}
                </Highlight>
            </Element>

            <Element>
                <Highlight className={"shell"}>{`$ gcc -g -Wall test.c -o test
test.c: In function 'main':
test.c:5:13: warning: initialization makes integer from pointer without a cast [-Wint-conversion]
    int c = a + b;
            ^
$ ./test
-1107732586`}
                </Highlight>
            </Element>

            <Spacer/>

            <Element>
                <Highlight className={"go"}>{`// Go
...
func main() {
    a := 2
    b := "3.5"
    c := a + b
    fmt.Println(c)
}`}
                </Highlight>
            </Element>

            <Element>
                <Highlight className={"shell"}>{`$ go run main.go
./main.go:5:9: invalid operation: a + b (mismatched types int and string)
`}
                </Highlight>
            </Element>

            <Element>
                <span>
                    I like these languages because they do <strong>exactly</strong> what I told them to do.
                    Go just lets me know that I messed up.
                    C assumes I didn't mess up and adds an <Code>int</Code> to the pointer that <Code>b</Code> stores.
                    Compare that to JS.
                </span>
            </Element>

            <Element>
                <Highlight className={"js"}>{`// JS
a = 2
b = "3.5"
c = a + b
console.log(c)`}
                </Highlight>
            </Element>

            <Element>
                <Highlight className={"shell"}>{`$ node app.js
"23.5"
`}
                </Highlight>
            </Element>

            <Element>
                <span>
                    JS "cleverly" converted the <Code>int</Code> into a <Code>string</Code>, then <strong>concatenated</strong> the two.
                    In this particular instance, some may argue it's a "feature".
                    It doesn't stop there.
                </span>
            </Element>

            <Element>
                <Highlight className={"js"}>{`// JS
a = 2
b = {
  value: "3.5",
  hello: "world"
}
c = a + b
console.log(c)`}
                </Highlight>
            </Element>

            <Element>
                <Highlight className={"shell"}>{`$ node app.js
"2[object Object]"
`}
                </Highlight>
            </Element>

            <Element>
                <span>
                    Absolutely useless.
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={4}>
                    Made-up operators
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    Examples include the <a
                    href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"}>nullish coalescing operator</a> (<Code>??</Code>) and the <a
                    href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}>optional chaining operator</a> (<Code>?.</Code>).
                    These two operators (and I'm sure there are more) are shorthand for edge cases that save (at <strong>most</strong>) a few lines of code.
                </span>
            </Element>

            <Element>
                <span>
                    The following example illustrates how the nullish coalescing operator can be replaced with a ternary operator for just 37 more characters (and 100% more readability).
                </span>
            </Element>

            <Element>
                <Highlight language={"js"}>{`// nullish coalescing operator
const res = null
const foo = res ?? 'default string'
console.log(foo)
// output: "default string"

// ternary operator
const res = null
const foo = (res === null || res === undefined) ? 'default string' : res
console.log(foo)
// output: "default string"
`}
                </Highlight>
            </Element>

            <Element>
                <span>
                    On a side note, I asked a coworker who's been using computers since before the Internet if he knew what a nullish coalescing operator was.
                    His immediate response: "that must be a JS thing."
                </span>
            </Element>

            <Spacer/>

            <HeaderPipe>
                <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`} id={5}>
                    Esolang in disguise
                </div>
            </HeaderPipe>

            <Element>
                <span>
                    <a href={"https://en.wikipedia.org/wiki/Esoteric_programming_language"}>Esoteric programming languages</a>, or esolangs for short, are languages that have basically no real-world use.
                    Because of the aforementioned oddities with JS and type normalization, <Code>++[[]][+[]]+[+[]]</Code> returns <Code>"10"</Code>.
                    Just like any other esolang (<a href={"https://en.wikipedia.org/wiki/Brainfuck"}>Brainfuck</a> comes to mind), given enough time, you can understand what it does.
                    However, it's still behavior you wouldn't see in any other language.
                </span>
            </Element>

            <Element>
                <span>
                    <a href={"https://stackoverflow.com/questions/7202157/why-does-return-the-string-10"}>StackOverflow</a>
                </span>
            </Element>

            <Element>
                <span>
                    <a href={"https://stackoverflow.com/questions/17014770/why-and-how-does-evaluate-to-the-letter-i"}>Also StackOverflow</a>
                </span>
            </Element>
        </>
    )
}