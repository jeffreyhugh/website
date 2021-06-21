import {useRouter} from "next/router";

export default function TIndex() {
    if (process.browser) {
        const router = useRouter()
        router.push("/")
    }

    return null
}