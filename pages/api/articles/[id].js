import { articles } from "../../../data"

export default function handler(req, res) {
  const filtered = articles.filter((article) => article.id === req.query.id)

  filtered.length
    ? res.status(200).json(filtered[0])
    : res
        .status(400)
        .json({ message: `Article ${req.query.id} does not exist` })
}
