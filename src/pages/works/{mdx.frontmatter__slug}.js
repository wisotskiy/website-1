import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../../components/seo"
import Layout from "../../components/layout"


export const query = graphql`
query PostBySlug(
    $frontmatter__slug: String, 
    $locale: String
  ) {
    mdx(
      frontmatter: {slug: {eq: $frontmatter__slug}}, 
      fields: {locale: {eq: $locale}}
    ) {
      frontmatter {
        title
        published_at
      }
    body
  }
}
`

const BlogPost = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>
        Published at {post.frontmatter.published_at}
      </p>
      // Image rendering code omitted for brevity
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  )
}
export default BlogPost