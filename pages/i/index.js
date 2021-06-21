import {useRouter} from "next/router";

export default function IIndex() {
    if (process.browser) {
        const router = useRouter()
        router.push("/")
    }

    return null
}