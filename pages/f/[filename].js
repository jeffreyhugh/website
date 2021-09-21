import { useRouter } from "next/dist/client/router"

export async function getServerSideProps(ctx) {
    const { filename } = ctx.query;
    return {
        redirect: {
            destination: `https://storage.queue.bot/f/${filename}`,
            permanent: false,
        }
    }
}

const pIndex = () => {
    return null
}

export default pIndex