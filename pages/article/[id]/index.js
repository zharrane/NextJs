import { useRouter } from "next/dist/client/router"

const Article = ({ article }) => {
  //   const router = useRouter()
  //   const { id } = router.query
  return <div>This is article {article.id}</div>
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const article = await res.json()
  return {
    props: {
      article,
    },
  }
}
export default Article
