import Router from "next/router"
import Meta from "../../../components/Meta"
const Article = ({ article }) => {
  //   const router = useRouter()
  //   const { id } = router.query
  return (
    <>
      <Meta title={article.title} descriptiom={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <div onClick={() => Router.back()}>
        <a>Go Back</a>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  let article = {}
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  // const res = await fetch(`${SERVER}/api/articles/${context.params.id}`)
  const response = await res.json()
  article = response ? response : {}
  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  let articles = []
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const response = await res.json()
  articles = response ? response : []
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: false,
  }
}
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )
//   const article = await res.json()
//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//   return {
//     paths,
//     fallback: false,
//   }
// }
export default Article
