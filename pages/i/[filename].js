import {useRouter} from "next/router";

export default function I() {
    if (process.browser) {
        const router = useRouter()
        const { filename } = router.query
        window.location = `https://storage.queue.bot/i/${filename}`
    }

    return null
}
