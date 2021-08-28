import Head from "next/head"
import Article from "../components/Article"

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>NextJS in Hands</title>
        <meta name="keywords" content="web" />
      </Head>
      <Article articles={articles} />
    </div>
  )
}
export default Home
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
