import { useRouter } from 'next/router';

export async function getServerSideProps(ctx) {
    const slug = ctx.params.slug

    const res = await fetch(`https://api.queue.bot/link/v1/get/${slug}`, {})

    if (res.status === 200) {
        const j = await res.json()
        return {
            redirect: {
                destination: j.destination,
                permanent: j.permanent,
            }
        }
    } else {
        return {
            redirect: {
                destination: "/404",
                permanent: false
            }
        }
    }
}

export default function Slug() {
    return null
}