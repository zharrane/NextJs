import Article from "../components/Article"
import Meta from "../components/Meta"
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
  let articles = []
  // const res = await fetch(`${SERVER}/api/articles`)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const response = await res.json()
  articles = response ? response : []
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
