import styles from "../styles/Article.module.css"
import Link from "next/Link"
const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/{id}" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
