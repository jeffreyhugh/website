import { useRouter } from "next/dist/client/router"

export async function getServerSideProps(ctx) {
    return {
        redirect: {
            destination: `https://storage.queue.bot/i/${filename}`,
            permanent: false,
        }
    }
}

const pIndex = () => {
    return null
}

export default pIndex