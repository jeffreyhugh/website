import {useRouter} from "next/router";

export default function T() {
    if (process.browser) {
        const router = useRouter()
        const { filename } = router.query
        window.location = `https://storage.queue.bot/t/${filename}`
    }

    return null
}
