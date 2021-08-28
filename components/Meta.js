import React from "react"
import Head from "next/head"
const Meta = ({
  title = "WebDev News",
  keywords = "web development, programming",
  description = "Get latest web dev news",
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="ketwords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />

      <title> {title}</title>
    </Head>
  )
}

export default Meta
