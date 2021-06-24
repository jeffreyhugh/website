import Meta from "../components/meta";
import BigContainer from "../components/bigContainer";
import Spacer from "../components/spacer";
import HeaderPipe from "../components/headerPipe";
import textStyles from "../styles/text.module.css";
import styles from "../styles/shared.module.css";
import Head from "next/head";
import Element from "../components/element";
import Image from "next/image";
import BackHome from "../components/backHome";
import Highlight from "react-highlight";
import Container from "../components/container";

export default function Exec() {
    return (
        <Meta>
            <Head>
                <title>{"QueueBot - exec"}</title>
            </Head>
            <BigContainer>
                <Spacer/>
                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.massive} ${textStyles.bold} ${textStyles.gradient}`}>
                            exec - run code straight from Discord
                        </div>
                        <div className={`${textStyles.large} ${textStyles.gradient}`}>
                            <span>
                                <a href={"https://discord.com/oauth2/authorize?client_id=830972631917789265&scope=bot&permissions=298048"}>
                                    Invite the bot
                                </a>
                                &nbsp;or keep reading to see what it does
                            </span>
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                <Element>
                    <span>
                        exec supports Python, Go, C, Rust, Bash, and NodeJS.
                    </span>
                </Element>

                <Element>
                    <span>
                        Each execution runs completely isolated in its own container, detached from all networks, for a maximum of 45 seconds.
                    </span>
                </Element>

                <Spacer/>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                        Usage
                    </div>
                </HeaderPipe>

                <Element>
                    <span>
                        To run a snippet, type <code>execute </code>&nbsp;(note the space) followed by a <a
                        href={"https://gist.github.com/matthewzring/9f7bbfd102003963f9be7dbcf7d40e51#syntax-highlighting"}>syntax-highlighted code block</a>.
                    </span>
                </Element>

                <Element>
                    <span>
                        Once the code is finished executing, the entire <code>.log</code> file will be posted.
                    </span>
                </Element>

                <Element>
                    <Image src={"/images/exec/demo.png"} width={1088} height={1013}
                           alt={"exec demonstration"} className={styles.darkened} quality={100}/>
                </Element>

                <Spacer/>
                <Spacer/>

                <HeaderPipe>
                    <div className={`${textStyles.xlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                        Code wrapping
                    </div>
                </HeaderPipe>

                <Element>
                    <span>
                        If you do not explicitly declare <code>main()</code> in your C, Go, or Rust code, exec will wrap it for you.
                        Of course, if you declare <code>main()</code>, exec will run it as-is.
                    </span>
                </Element>

                <Element>
                    <Highlight language={'c'}>{`// input.c
printf("exec is awesome!\\n");

// ----------
// input.c (wrapped)
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

int main() {
    printf("exec is awesome!\\n");
}`}
                    </Highlight>
                </Element>

                <Element>
                    <Highlight language={'go'}>{`// input.go
fmt.Printf("exec is awesome!\\n")

// ----------
// input.go (wrapped)
package main

import (
    "fmt"
    "math"
    "strings"
)

var _, _ = fmt.Printf("")
var _ = math.Abs(1)
var _ = strings.ToLower("")

func main() {
    fmt.Printf("exec is awesome!\\n")
}`}
                    </Highlight>
                </Element>

                <Element>
                    <Highlight language={'rust'}>{`// input.rs
println!("exec is awesome!");

// ----------
// input.rs (wrapped)
fn main() {
    println!("exec is awesome!");
}`}
                    </Highlight>
                </Element>

                <Spacer/>

                <HeaderPipe>
                    <Container>
                        <div className={`${textStyles.xxlarge} ${textStyles.bold} ${textStyles.gradient}`}>
                            Ready to try exec?
                        </div>
                        <div className={`${textStyles.large} ${textStyles.gradient}`}>
                            <a href={"https://discord.com/oauth2/authorize?client_id=830972631917789265&scope=bot&permissions=298048"}>Invite
                                the bot</a>
                        </div>
                    </Container>
                </HeaderPipe>

                <Spacer/>

                <BackHome/>
            </BigContainer>
        </Meta>
    )
}