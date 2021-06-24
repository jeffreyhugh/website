import Head from 'next/head'

export default function Meta({children}) {
    return (
        <div>
            <Head>
                <title>QueueBot</title>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
                      integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous"/>
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                {/*<link rel={"stylesheet"} href={"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/qtcreator_dark.min.css"}/>*/}

                <link rel={"preload"} href={"/fonts/Oxygen/Oxygen-Regular.ttf"} as={"font"} crossOrigin={""}/>
                <link rel={"preload"} href={"/fonts/OxygenMono/OxygenMono-Regular.ttf"} as={"font"} crossOrigin={""}/>

                <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>

                <link rel="icon" href="/favicon.ico"/>
                <meta name="og:title" content={"QueueBot"}/>
                <meta name="og:description" content={"Examine the consequences"}/>
                <meta name="og:type" content={"website"}/>
                <meta name="og:url" content={"https://queue.bot"}/>
                <meta name="theme-color" content={"#5ee7df"}/>
            </Head>
            <main>{children}</main>
        </div>
    )
}