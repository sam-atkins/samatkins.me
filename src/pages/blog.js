import React from 'react'
import GatsbyLink from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SMIcons from '../components/SMIcons'

import Link from '../components/Link'

// import '../css/index.css'
import '../styles/main.scss'

export default function Blog ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <Nav />
      <div className='blog-post'>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div>
                <div className='blog-post-preview' key={post.id}>
                  <h1 className='title'>
                    <GatsbyLink to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </GatsbyLink>
                  </h1>
                  <h2 className='date'>
                    {post.frontmatter.date}
                  </h2>
                  <p>
                    {post.excerpt}
                  </p>
                  <Link to={post.frontmatter.path}>Read more</Link>
                </div>
              </div>
            )
          })}
      </div>
      <SMIcons />
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
          }
        }
      }
    }
  }
`
