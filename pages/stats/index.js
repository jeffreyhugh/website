import {useRouter} from "next/router";

export default function StatsIndex() {
    if (process.browser) {
        const router = useRouter()
        router.push("/")
    }

    return null
}