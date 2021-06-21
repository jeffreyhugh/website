import {useRouter} from "next/router";

export default function T() {
    const router = useRouter()
    const { filename } = router.query
    if (filename) {
        window.location = `https://storage.queue.bot/t/${filename}`
    }

    return null
}
