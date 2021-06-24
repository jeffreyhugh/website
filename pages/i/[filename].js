import {useRouter} from "next/router";

export default function I() {
    const router = useRouter()
    const {filename} = router.query
    if (filename) {
        window.location = `https://storage.queue.bot/i/${filename}`
    }

    return null
}
