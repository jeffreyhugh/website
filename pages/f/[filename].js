import {useRouter} from "next/router";

export default function F() {
    const router = useRouter()
    const {filename} = router.query
    if (filename) {
        window.location = `https://storage.queue.bot/f/${filename}`
    }

    return null
}
