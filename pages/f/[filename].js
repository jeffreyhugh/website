import {useRouter} from "next/router";

export default function F() {
    if (process.browser) {
        const router = useRouter()
        const { filename } = router.query
        window.location = `https://storage.queue.bot/f/${filename}`
    }

    return null
}
