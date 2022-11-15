import { Head, Title, Meta, Link, Body, Scripts } from 'solid-start'

const ArticleHead = ({ title, description }) => {
  return (
    <Head>
      <Title>{title} - Solid Blog</Title>
      <Meta name="description" content={description} />
      <meta property="og:title" content={`${title} - Solid Blog`} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export default ArticleHead
