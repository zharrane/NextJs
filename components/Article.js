import styles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"

const Article = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        return <ArticleItem key={article.id} article={article} />
      })}
    </div>
  )
}

export default Article
