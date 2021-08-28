import Meta from "../components/Meta"
import Article from "../components/Article"
import { SERVER } from "../config"
const Home = ({ articles }) => {
  return (
    <div>
      <Meta title="NextJS home" keywords="web" />
      <Article articles={articles} />
    </div>
  )
}
export default Home

export const getStaticProps = async () => {
  const res = await fetch(`${SERVER}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
