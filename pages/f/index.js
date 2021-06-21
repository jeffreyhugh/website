import {useRouter} from "next/router";

export default function FIndex() {
    if (process.browser) {
        const router = useRouter()
        router.push("/")
    }

    return null
}